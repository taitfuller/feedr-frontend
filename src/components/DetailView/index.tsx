import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./style.module.css";
import Button from "../Button";
import Chip from "../Chip";
import Review from "../Review";
import TextStat from "../TextStat";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { TopicSummary } from "../../types";
import percentageIncrease from "../../util/percentageIncrease";
import NewIssueModal from "../Modal/NewIssueModal";

interface DetailViewProps {
  topic: TopicSummary | undefined;
}

const DetailView: React.FC<DetailViewProps> = ({ topic }: DetailViewProps) => {
  const [showNew, setShowNew] = useState(false);

  if (!topic) return <>Topic Undefined - heh</>;

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.heading}>
          <span className={styles.title}>
            <h2>{topic.keywords.join(", ")}</h2>
          </span>
          <Chip type={topic.type} />
        </div>
        <div className={styles.stats}>
          <div className={styles.stat1}>
            <TextStat
              stat={topic.counts.newReviews}
              type="count"
              desc="new reviews"
            />
          </div>
          <div className={styles.stat2}>
            <TextStat
              stat={
                topic.counts.oldReviews
                  ? percentageIncrease(
                      topic.counts.newReviews,
                      topic.counts.oldReviews
                    )
                  : undefined
              }
              type="percentage"
              desc="total reviews"
            />
          </div>
          <div className={styles.stat3}>
            <TextStat
              stat={topic.counts.averageRating}
              type="rating"
              desc="average rating"
            />
          </div>
        </div>
        <div className={styles.reviews}>
          <h5>Contributing reviews</h5>
          {topic.reviews.map((review) => (
            <Review
              key={review._id}
              rating={review.rating}
              date={dayjs(review.date).subtract(9, "hour")}
              text={review.text}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <div className={`${styles.btn} ${styles.btnLeft}`}>
            <Button
              text="New issue"
              icon={faGithub}
              handleOnClick={() => setShowNew(true)}
            />
          </div>

          <div className={styles.btn}>
            <Button
              text="View all reviews"
              variant="secondary"
              handleOnClick={() => console.log("View all reviews")}
            />
          </div>
        </div>
      </div>
      <NewIssueModal show={showNew} onClose={() => setShowNew(false)} />
    </>
  );
};

export default DetailView;
