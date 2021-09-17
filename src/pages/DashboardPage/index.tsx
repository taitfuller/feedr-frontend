import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import StatsSummary from "../../components/StatsSummary";
import TopicTable from "../../components/TopicTable";
import DetailView from "../../components/DetailView";
import styles from "./style.module.css";
import TextField from "../../components/TextField";
import Menu from "../../components/Menu";
import { TopicSummary } from "../../types";
import axios from "axios";

const DashboardPage: React.FC = () => {
  const [search, setSearch] = useState("");

  const [topics, setTopics] = useState<TopicSummary[]>([]);

  const [from] = useState(new Date(2020, 8, 15));
  const [to] = useState(new Date(2020, 9));
  const [platforms] = useState(["iOS", "Android"]);

  useEffect(() => {
    (async () => {
      const response = await axios.get<TopicSummary[]>("/api/topic", {
        params: { from, to, platform: platforms },
      });
      setTopics(response.data);
    })();
  }, [from, to, platforms]);

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
        <Card>
          <StatsSummary
            featureRequests={769}
            bugReports={670}
            other={395}
            reviews={1834}
            totalIncrease={18}
            averageRating={4.1}
            topics={13}
          />
        </Card>
      </div>
      <div className={styles.table}>
        <Card>
          <TextField
            textValue={search}
            onChangeHandler={setSearch}
            label="Search..."
          />
          <TopicTable topics={topics} />
        </Card>
      </div>
      <div className={styles.graph}>
        <Card>
          <h2>Types of reviews over time</h2>
        </Card>
      </div>
      <div className={styles.detail}>
        <Card>
          <DetailView />
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
