import React from "react";
import Card from "../Card";
import BarChart from "../BarChart";
import TextStat from "../TextStat";
import styles from "./style.module.css";

interface StatsSummaryProps {
  featureRequests: number;
  bugReports: number;
  other: number;
  reviews: number;
  totalIncrease: number;
  averageRating: number;
  topics: number;
}

const StatsSummary: React.FC<StatsSummaryProps> = ({
  featureRequests,
  bugReports,
  other,
  reviews,
  totalIncrease,
  averageRating,
  topics,
}: StatsSummaryProps) => {
  return (
    <Card>
      <div className={styles.statsSum}>
        <div className={styles.barChartContainer}>
          <BarChart
            featureCount={featureRequests}
            bugCount={bugReports}
            otherCount={other}
          />
        </div>
        <div className={styles.stat}>
          <TextStat stat={reviews} type={"count"} desc={"reviews"} />
        </div>
        <div className={styles.stat}>
          <TextStat
            stat={totalIncrease}
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
    </Card>
  );
};

export default StatsSummary;
