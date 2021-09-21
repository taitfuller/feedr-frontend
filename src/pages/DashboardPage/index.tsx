import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import StatsSummary from "../../components/StatsSummary";
import TopicTable from "../../components/TopicTable";
import DetailView from "../../components/DetailView";
import styles from "./style.module.css";
import TextField from "../../components/TextField";
import Menu from "../../components/Menu";
import { ReviewSummary, TopicSummary } from "../../types";
import axios from "axios";
import useLocalStorage from "react-use-localstorage";

const DashboardPage: React.FC = () => {
  const [token] = useLocalStorage("token");

  const [search, setSearch] = useState("");

  const [topics, setTopics] = useState<TopicSummary[]>([]);
  const [summary, setSummary] = useState<ReviewSummary>();
  const [selectedTopic, setSelectedTopic] = useState<TopicSummary>();

  const [from] = useState(new Date(2020, 8, 15));
  const [to] = useState(new Date(2020, 9));
  const [platforms] = useState(["iOS", "Android"]);

  useEffect(() => {
    const axiosInstance = axios.create({
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    (async () => {
      const response = await axiosInstance.get<TopicSummary[]>("/api/topic", {
        params: { from, to, platform: platforms },
      });
      setTopics(response.data);
    })();

    (async () => {
      const response = await axiosInstance.get<ReviewSummary>(
        "/api/review/summary",
        {
          params: { from, to, platform: platforms },
        }
      );
      setSummary(response.data);
    })();
  }, [from, to, platforms, token]);

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <div className={styles.date}>
          <h1>Viewing reviews from the past week</h1>
        </div>
        <div>
          <Menu title="Logged in as taitfuller" width={210}>
            <Menu.Item handleOnClick={() => console.log("Click Settings!")}>
              Settings
            </Menu.Item>
            <Menu.Item handleOnClick={() => console.log("Click Log Out!")}>
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
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
