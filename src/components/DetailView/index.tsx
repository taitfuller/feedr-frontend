import React from "react";
import dayjs from "dayjs";
import styles from "./style.module.css";
import Chip from "../Chip";
import Review from "../Review";
import TextStat from "../TextStat";
import { TopicSummary } from "../../types";
import percentageIncrease from "../../util/percentageIncrease";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

interface DetailViewProps {
  topic: TopicSummary | undefined;
  inDashboard?: boolean;
}

const DetailView: React.FC<DetailViewProps> = ({
  topic,
  inDashboard,
}: DetailViewProps) => {
  if (!topic)
    return (
      <div className={styles.empty}>Select a topic to see more details.</div>
    );

  const flaggedReviews = topic.reviews.filter((review) => review.flag);
  const flaggedPresent = flaggedReviews.length != 0;

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
          {flaggedPresent && (
            <div className={!inDashboard ? styles.flagged : ""}>
              {!inDashboard && (
                <div className={styles.flagIndicator}>
                  <FontAwesomeIcon icon={faFlag} color="#ffffff" size="xs" />
                </div>
              )}
              {flaggedReviews.map((review) => (
                <Review
                  key={review._id}
                  rating={review.rating}
                  date={dayjs(review.date).subtract(9, "hour")}
                  text={review.text}
                />
              ))}
            </div>
          )}
          {topic.reviews
            .filter((review) => !review.flag)
            .map((review) => (
              <Review
                key={review._id}
                rating={review.rating}
                date={dayjs(review.date).subtract(9, "hour")}
                text={review.text}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailView;
