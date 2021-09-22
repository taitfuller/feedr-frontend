import React, { useState } from "react";
import Modal from "../index";
import TextField from "../../TextField";
import TextArea from "../../TextArea";
import styles from "./style.module.css";
import Button from "../../Button";
import DetailView from "../../DetailView";
import { TopicSummary } from "../../../types";

interface NewIssueModalProps {
  show: boolean;
  onClose: () => void;
  topic: TopicSummary | undefined;
}

const NewIssueModal: React.FC<NewIssueModalProps> = ({
  show,
  onClose,
  topic,
}: NewIssueModalProps) => {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [action, setAction] = useState("");
  const [rationale, setRationale] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [nextSteps, setNextSteps] = useState("");

  return (
    <Modal show={show} onClose={onClose} heading="Create new issue">
      <div className={styles.container}>
        <div className={styles.halfLeft}>
          <div className={styles.section}>
            <h5>Title</h5>
            <TextField textValue={title} onChangeHandler={setTitle} />
          </div>

          <div className={styles.userStory}>
            <h5 className={styles.userStoryHeading}>User story</h5>
            <p>As a</p>
            <TextField
              textValue={role}
              onChangeHandler={setRole}
              label="role"
            />
            <p>I want to</p>
            <TextField
              textValue={action}
              onChangeHandler={setAction}
              label="action"
            />
            <p>So that</p>
            <TextField
              textValue={rationale}
              onChangeHandler={setRationale}
              label="rationale"
            />
          </div>

          <div className={styles.section}>
            <h5>
              {topic?.type == "bugReport"
                ? "What could be the suspected root cause?"
                : "What value would be added by this feature?"}
            </h5>
            <TextArea textValue={rootCause} onChangeHandler={setRootCause} />
          </div>

          <div className={styles.section}>
            <h5>What action needs to be taken?</h5>
            <TextArea textValue={nextSteps} onChangeHandler={setNextSteps} />
          </div>

          <Button
            text="Submit new issue"
            handleOnClick={() => onClose()}
            variant="primary"
          />
        </div>

        <div className={styles.halfRight}>
          <DetailView topic={topic} showButtons={false} />
        </div>
      </div>
    </Modal>
  );
};

export default NewIssueModal;
