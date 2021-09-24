import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import Button from "../../components/Button";
import styles from "./style.module.css";
import { User } from "../../types";
import Select from "../../components/Select";

const OnboardPage: React.FC = () => {
  const [token, setToken] = useLocalStorage("token");
  const history = useHistory();

  const [user, setUser] = useState<User>();
  const [modelledApps] = useState(["Spotify"]);
  const [repositories] = useState(["spotify"]);

  const [selectedRepository, setSelectedRepository] = useState("");
  const [selectedApp, setSelectedApp] = useState("");

  const appSelectMessage = "Select an App";
  const repoSelectMessage = "Select a Repository";

  useEffect(() => {
    const axiosInstance = axios.create({
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    (async () => {
      try {
        const response = await axiosInstance.get<User>("/api/user");
        setUser(response.data);
      } catch (error) {
        if (error.response.status === 401) history.replace("/login");
      }
    })();
  }, [token, history]);

  const handleCreateFeed = useCallback(async () => {
    try {
      const response = await axios.post(
        "/api/feed",
        {
          appName: selectedApp,
          repoName: selectedRepository,
        },
        {
          headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      history.push(`/dashboard/${response.data}`);
    } catch (error) {
      if (error.response.status === 401) history.replace("/login");
    }
  }, [selectedApp, selectedRepository, token, history]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Card>
          <div className={styles.items}>
            <h1>Welcome{user && `, ${user.displayName}`}!</h1>
            <div className={styles.item}>
              <p>To get started, select your App from the App Store:</p>
              <Select
                onChangeHandler={(app) => setSelectedApp(app)}
                width={329}
              >
                {[
                  <Select.Option key={-1}>{appSelectMessage}</Select.Option>,
                  ...modelledApps.map((app, index) => (
                    <Select.Option key={index}>{app}</Select.Option>
                  )),
                ]}
              </Select>
            </div>
            <div className={styles.item}>
              <p>Next, select the GitHub repository for your app:</p>
              <Select
                onChangeHandler={(repository) =>
                  setSelectedRepository(repository)
                }
                width={329}
              >
                {[
                  <Select.Option key={-1}>{repoSelectMessage}</Select.Option>,
                  ...repositories.map((repo, index) => (
                    <Select.Option key={index}>{repo}</Select.Option>
                  )),
                ]}
              </Select>
            </div>
            <div className={styles.buttonRow}>
              <Button
                text="Log Out"
                variant="secondary"
                handleOnClick={() => {
                  setToken("");
                  history.replace("/login");
                }}
              />
              <Button
                text="Go to Dashboard"
                variant="primary"
                handleOnClick={handleCreateFeed}
                disabled={
                  !selectedApp ||
                  selectedApp === appSelectMessage ||
                  !selectedRepository ||
                  selectedRepository === repoSelectMessage
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OnboardPage;
