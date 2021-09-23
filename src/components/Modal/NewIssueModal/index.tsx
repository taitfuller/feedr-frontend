import React, { useCallback, useMemo, useState } from "react";
import Modal from "../index";
import TextField from "../../TextField";
import TextArea from "../../TextArea";
import styles from "./style.module.css";
import Button from "../../Button";
import DetailView from "../../DetailView";
import { Review, Topic, TopicSummary } from "../../../types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface NewIssueModalProps {
  show: boolean;
  onSubmit: (title: string, body: string) => Promise<void>;
  onClose: () => void;
  topic: Topic | undefined;
  from: Date;
  to: Date;
}

const NewIssueModal: React.FC<NewIssueModalProps> = ({
  show,
  onSubmit,
  onClose,
  topic,
  from,
  to,
}: NewIssueModalProps) => {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [action, setAction] = useState("");
  const [rationale, setRationale] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [nextSteps, setNextSteps] = useState("");

  const dynamicPrompt =
    topic?.type == "bugReport"
      ? "What could be the suspected root cause?"
      : "What value would be added by this feature?";

  const clearState = useCallback(() => {
    setTitle("");
    setRole("");
    setAction("");
    setRationale("");
    setRootCause("");
    setNextSteps("");
  }, []);

  const body = useMemo(
    () => `## User story\n
**As a** ${role}
**I want to** ${action}
**So that** ${rationale}\n
## ${dynamicPrompt}\n
${rootCause}\n
## What action needs to be taken?\n
${nextSteps}`,
    [role, action, rationale, dynamicPrompt, rootCause, nextSteps]
  );

  const newReviews = useMemo<Review[]>(
    () =>
      topic?.reviews.filter(
        (review) => from <= new Date(review.date) && new Date(review.date) <= to
      ) ?? [],
    [topic, from, to]
  );

  const counts = useMemo<TopicSummary["counts"]>(
    () => ({
      newReviews: newReviews?.length ?? 0,
      oldReviews:
        topic?.reviews.filter((review) => new Date(review.date) < from)
          .length ?? 0,
      averageRating: newReviews
        ? newReviews.reduce((sum, review) => sum + review.rating, 0) /
          newReviews.length
        : 0,
    }),
    [newReviews, topic, from]
  );

  return (
    <Modal
      show={show}
      onClose={() => {
        clearState();
        onClose();
      }}
      heading="Create new issue"
    >
      <div className={styles.container}>
        <div className={styles.halfLeft}>
          <div className={styles.section}>
            <h5 style={{ marginBottom: "8px" }}>Title</h5>
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
            <TextArea
              textValue={rootCause}
              onChangeHandler={setRootCause}
              label={dynamicPrompt}
            />
          </div>

          <div className={styles.section}>
            <TextArea
              textValue={nextSteps}
              onChangeHandler={setNextSteps}
              label="What action needs to be taken?"
            />
          </div>

          <Button
            text="Create issue"
            icon={faGithub}
            handleOnClick={async () => {
              await onSubmit(title, body);
              clearState();
              onClose();
            }}
            disabled={
              !title ||
              !role ||
              !action ||
              !rationale ||
              !rootCause ||
              !nextSteps
            }
            variant="primary"
          />
        </div>

        <div className={styles.halfRight}>
          <DetailView
            topic={
              topic ? { ...topic, counts, reviews: newReviews } : undefined
            }
            inDashboard={false}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NewIssueModal;
