import React from "react";
import BarChart from "../BarChart";
import TextStat from "../TextStat";
import styles from "./style.module.css";
import { ReviewSummary } from "../../types";
import percentageIncrease from "../../util/percentageIncrease";

type StatsSummaryProps = ReviewSummary;

const StatsSummary: React.FC<ReviewSummary> = ({
  featureRequests,
  bugReports,
  other,
  oldReviews,
  topics,
  averageRating,
}: StatsSummaryProps) => {
  const newReviews = featureRequests + bugReports + other;

  return (
    <div className={styles.statsSum}>
      <div className={styles.barChartContainer}>
        <BarChart
          featureCount={featureRequests}
          bugCount={bugReports}
          otherCount={other}
        />
      </div>
      <div className={styles.stat}>
        <TextStat stat={newReviews} type={"count"} desc={"reviews"} />
      </div>
      <div className={styles.stat}>
        <TextStat
          stat={
            oldReviews ? percentageIncrease(newReviews, oldReviews) : undefined
          }
          type={"percentage"}
          desc={"total reviews"}
        />
      </div>
      <div className={styles.stat}>
        <TextStat
          stat={averageRating}
          type={"rating"}
          desc={"average rating"}
        />
      </div>
      <div className={styles.stat}>
        <TextStat stat={topics} type={"count"} desc={"topics"} />
      </div>
    </div>
  );
};

export default StatsSummary;
