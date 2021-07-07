import React from "react";
import styles from "./style.module.css";

interface BarChartProps {
  featureCount: number;
  bugCount: number;
  otherCount: number;
}

const BarChart: React.FC<BarChartProps> = ({
  featureCount,
  bugCount,
  otherCount,
}: BarChartProps) => {
  const totalReviews = featureCount + bugCount + otherCount;

  const featureFrac = (featureCount / totalReviews) * 100;
  const bugFrac = ((featureCount + bugCount) / totalReviews) * 100;

  return (
    <div>
      <div className={styles.barContainer}>
        <div
          className={`${styles.barFrac} ${styles.barBug}`}
          style={{ width: `${bugFrac}%` }}
        />
        <div
          className={`${styles.barFrac} ${styles.barFeature}`}
          style={{ width: `${featureFrac}%` }}
        />
      </div>
    </div>
  );
};

export default BarChart;
