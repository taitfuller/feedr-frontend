import React, { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import StatsSummary from "../../components/StatsSummary";
import TopicTable from "../../components/TopicTable";
import DetailView from "../../components/DetailView";
import styles from "./style.module.css";
import TextField from "../../components/TextField";
import Menu from "../../components/Menu";
import { ReviewSummary, TopicSummary, User } from "../../types";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";
import { useHistory } from "react-router-dom";
import NewIssueModal from "../../components/Modal/NewIssueModal";
import Button from "../../components/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ViewAllModal from "../../components/Modal/ViewAllModal";

const DashboardPage: React.FC = () => {
  const [token, setToken] = useLocalStorage("token");
  const history = useHistory();

  const [search, setSearch] = useState("");

  const [topics, setTopics] = useState<TopicSummary[]>([]);
  const [summary, setSummary] = useState<ReviewSummary>();
  const [selectedTopic, setSelectedTopic] = useState<TopicSummary>();
  const [user, setUser] = useState<User>();
  const repository = "spotify";

  const [from] = useState(new Date(2020, 8, 15));
  const [to] = useState(new Date(2020, 9));
  const [platforms] = useState(["iOS", "Android"]);

  const [showNewIssueModal, setShowNewIssueModal] = useState(false);
  const [showViewAllModal, setShowViewAllModal] = useState(false);

  useEffect(() => {
    const axiosInstance = axios.create({
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    (async () => {
      try {
        const response = await axiosInstance.get<TopicSummary[]>("/api/topic", {
          params: { from, to, platform: platforms },
        });
        setTopics(response.data);
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
      }
    })();

    (async () => {
      try {
        const response = await axiosInstance.get<ReviewSummary>(
          "/api/review/summary",
          {
            params: { from, to, platform: platforms },
          }
        );
        setSummary(response.data);
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
      }
    })();

    (async () => {
      try {
        const response = await axiosInstance.get<User>("/api/user");
        setUser(response.data);
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
      }
    })();
  }, [from, to, platforms, token, history]);

  const handleCreateIssue = useCallback(
    async (title, body) => {
      try {
        await axios.post(
          "/api/github/issue",
          {
            owner: user?.displayName,
            repo: repository,
            title,
            body,
          },
          {
            headers: {
              "Content-type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
      }
    },
    [user, repository, token, history]
  );

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <div className={styles.date}>
          <h1>Viewing reviews from the past week</h1>
        </div>
        <div>
          <Menu title={`Logged in as ${user?.displayName}`} width={210}>
            <Menu.Item handleOnClick={() => console.log("Click Settings!")}>
              Settings
            </Menu.Item>
            <Menu.Item
              handleOnClick={() => {
                setToken("");
                history.replace("/login");
              }}
            >
              Log Out
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className={styles.stats}>
        <Card>{summary && <StatsSummary {...summary} />}</Card>
      </div>
      <div className={styles.table}>
        <Card>
          <TextField
            textValue={search}
            onChangeHandler={setSearch}
            label="Search..."
          />
          <TopicTable
            topics={topics}
            selected={selectedTopic}
            onSelect={setSelectedTopic}
          />
        </Card>
      </div>
      <div className={styles.graph}>
        <Card>
          <h2>Types of reviews over time</h2>
        </Card>
      </div>
      <div className={styles.detail}>
        <Card>
          <DetailView topic={selectedTopic} />
          {selectedTopic && (
            <div className={styles.detailButtons}>
              <div className={`${styles.btn} ${styles.btnLeft}`}>
                <Button
                  text="New issue"
                  icon={faGithub}
                  handleOnClick={() => setShowNewIssueModal(true)}
                />
              </div>

              <div className={styles.btn}>
                <Button
                  text="View all reviews"
                  variant="secondary"
                  handleOnClick={() => setShowViewAllModal(true)}
                />
              </div>
            </div>
          )}
          <NewIssueModal
            show={showNewIssueModal}
            onSubmit={handleCreateIssue}
            onClose={() => setShowNewIssueModal(false)}
            topic={selectedTopic}
          />
          <ViewAllModal
            show={showViewAllModal}
            onClose={() => setShowViewAllModal(false)}
            topic={selectedTopic}
          />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
