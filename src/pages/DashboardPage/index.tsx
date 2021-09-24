import React, { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import StatsSummary from "../../components/StatsSummary";
import TopicTable from "../../components/TopicTable";
import DetailView from "../../components/DetailView";
import styles from "./style.module.css";
import TextField from "../../components/TextField";
import Menu from "../../components/Menu";
import { ReviewSummary, Topic, TopicSummary, User } from "../../types";
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
  const [selectedTopicSummary, setSelectedTopicSummary] =
    useState<TopicSummary>();
  const [selectedTopic, setSelectedTopic] = useState<Topic>();
  const [user, setUser] = useState<User>();
  const repository = "spotify";

  const [from] = useState(new Date(2021, 8, 1));
  const [to] = useState(new Date(2021, 8, 24));
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

  useEffect(() => {
    (async () => {
      if (selectedTopicSummary)
        try {
          const response = await axios.get<Topic>(
            `/api/topic/${selectedTopicSummary._id}`,
            {
              headers: {
                "Content-type": "Application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setSelectedTopic(response.data);
        } catch (error) {
          if (error.response.status === 401) history.replace("/login");
        }
    })();
  }, [selectedTopicSummary, token, history]);

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

  const handleFlagReview = useCallback(
    async (id: string, value: boolean) => {
      const selectedTopicBackup = selectedTopic;
      setSelectedTopic(
        selectedTopic
          ? {
              ...selectedTopic,
              reviews:
                selectedTopic?.reviews.map((review) =>
                  review._id === id
                    ? {
                        ...review,
                        flag: !review.flag,
                      }
                    : review
                ) ?? [],
            }
          : undefined
      );
      try {
        await axios.patch(
          `/api/review/${id}/flag`,
          {
            flag: value,
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
        setSelectedTopic(selectedTopicBackup);
      }
    },
    [selectedTopic, token, history]
  );

  const handleRemoveReview = useCallback(
    async (id: string) => {
      const selectedTopicBackup = selectedTopic;
      setSelectedTopic(
        selectedTopic
          ? {
              ...selectedTopic,
              reviews: selectedTopic?.reviews.filter(
                (review) => review._id !== id
              ),
            }
          : undefined
      );
      try {
        await axios.patch(
          `/api/review/${id}/remove-topic`,
          {},
          {
            headers: {
              "Content-type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
        setSelectedTopic(selectedTopicBackup);
      }
    },
    [selectedTopic, token, history]
  );

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <div className={styles.date}>
          <h1>Viewing reviews from the past week</h1>
        </div>
        <div>
          <Menu title={`Logged in as ${user?.displayName ?? ""}`} width={210}>
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
            label="Search summaries..."
          />
          <div className={styles.tableOverflow}>
            <TopicTable
              topics={topics}
              selected={selectedTopicSummary}
              onSelect={setSelectedTopicSummary}
              search={search}
            />
          </div>
        </Card>
      </div>
      <div className={styles.detail}>
        <Card>
          <DetailView topic={selectedTopicSummary} inDashboard={true} />
          {selectedTopicSummary && (
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
            from={from}
            to={to}
          />
          <ViewAllModal
            show={showViewAllModal}
            onFlag={handleFlagReview}
            onRemove={handleRemoveReview}
            onClose={() => setShowViewAllModal(false)}
            topic={selectedTopic ?? selectedTopicSummary}
          />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
