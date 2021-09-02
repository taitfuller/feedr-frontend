import React from "react";
import dayjs from "dayjs";
import styles from "./style.module.css";
import Button from "../Button";
import Chip from "../Chip";
import Review from "../Review";
import TextStat from "../TextStat";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const midReview =
  "This is filler text that will hopefully be replaced by something that makes sense.";

const DetailView: React.FC = () => {
  return (
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
      <div className={styles.reviews}>
        <h5>Contributing reviews</h5>
        <Review
          rating={4}
          date={dayjs().subtract(9, "hour")}
          text={midReview}
        />
        <Review rating={5} date={dayjs().subtract(2, "day")} text={midReview} />
        <Review rating={3} date={dayjs().subtract(5, "day")} text={midReview} />
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.btn} ${styles.btnLeft}`}>
          <Button
            text="New issue"
            icon={faGithub}
            handleOnClick={() => console.log()}
          />
        </div>

        <div className={styles.btn}>
          <Button
            text="View all reviews"
            variant="secondary"
            handleOnClick={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailView;
