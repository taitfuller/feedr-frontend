import React, { useState } from "react";
import Modal from "../index";
import TextField from "../../TextField";
import TextArea from "../../TextArea";
import styles from "./style.module.css";
import Chip from "../../Chip";
import TextStat from "../../TextStat";
import Review from "../../Review";
import dayjs from "dayjs";
import Button from "../../Button";

interface NewIssueModalProps {
  show: boolean;
  onClose: () => void;
}

const midReview =
  "This is filler text that will hopefully be replaced by something that makes sense.";

const NewIssueModal: React.FC<NewIssueModalProps> = ({
  show,
  onClose,
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
        <div className={styles.half}>
          <div className={styles.section}>
            <h5>Title</h5>
            <TextField textValue={title} onChangeHandler={setTitle} />
          </div>

          <div className={styles.userStory}>
            <h5 className={styles.userStoryHeading}>User story</h5>
            <p>As a</p>
            <TextField textValue={role} onChangeHandler={setRole} />
            <p>I want to</p>
            <TextField textValue={action} onChangeHandler={setAction} />
            <p>So that</p>
            <TextField textValue={rationale} onChangeHandler={setRationale} />
          </div>

          <div className={styles.section}>
            <h5>What could be the suspected root cause?</h5>
            <TextArea textValue={rootCause} onChangeHandler={setRootCause} />
          </div>

          <div className={styles.section}>
            <h5>What action needs to be taken?</h5>
            <TextArea textValue={nextSteps} onChangeHandler={setNextSteps} />
          </div>

          <Button
            text="Submit new issue"
            handleOnClick={() => console.log()}
            variant="primary"
          />
        </div>

        <div className={styles.divider} />

        <div className={styles.half}>
          <div className={styles.grid}>
            <div className={styles.heading}>
              <span className={styles.title}>
                <h2>&quot;battery&quot;</h2>
              </span>
              <Chip type="bug" />
            </div>
            <div className={styles.stats}>
              <div className={styles.stat1}>
                <TextStat stat={69} type="count" desc="new reviews" />
              </div>
              <div className={styles.stat2}>
                <TextStat stat={42} type="percentage" desc="total reviews" />
              </div>
              <div className={styles.stat3}>
                <TextStat stat={4.2} type="rating" desc="average rating" />
              </div>
            </div>
          </div>

          <h2>Contributing reviews</h2>
          <Review
            rating={4}
            date={dayjs().subtract(9, "hour")}
            text={midReview}
          />
          <Review
            rating={5}
            date={dayjs().subtract(2, "day")}
            text={midReview}
          />
          <Review
            rating={5}
            date={dayjs().subtract(3, "day")}
            text={midReview}
          />
          <Review
            rating={4}
            date={dayjs().subtract(4, "day")}
            text={midReview}
          />
          <Review
            rating={3}
            date={dayjs().subtract(5, "day")}
            text={midReview}
          />
          <Review
            rating={3}
            date={dayjs().subtract(5, "day")}
            text={midReview}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NewIssueModal;
