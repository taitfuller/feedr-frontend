import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.css";

const LoginPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <Card>
        <h1>Welcome to FEEDR!</h1>
        <Button
          text={"Sign in with GitHub"}
          icon={faGithub}
          variant={"github"}
          handleOnClick={() => (window.location.href = "/api/auth/github")}
          disabled={false}
        />
      </Card>
    </div>
  </div>
);

export default LoginPage;
