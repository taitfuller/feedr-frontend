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

  const featureFrac = Math.round((featureCount / totalReviews) * 100);
  const bugFrac = Math.round((bugCount / totalReviews) * 100);
  const otherFrac = Math.round((otherCount / totalReviews) * 100);

  const featureWidth = (featureCount / totalReviews) * 100;
  const bugWidth = ((featureCount + bugCount) / totalReviews) * 100;

  const featureLabelPos = 0;
  const bugLabelPos = (featureCount / totalReviews) * 100;
  const otherLabelPos = ((featureCount + bugCount) / totalReviews) * 100;

  return (
    <div>
      <div className={styles.barContainer}>
        <div
          className={`${styles.barFrac} ${styles.barBug}`}
          style={{ width: `${bugWidth}%` }}
        />
        <div
          className={`${styles.barFrac} ${styles.barFeature}`}
          style={{ width: `${featureWidth}%` }}
        />
      </div>
      <div>
        <div className={styles.barLabel} style={{ left: featureLabelPos }}>
          <span className={styles.percent}>{featureFrac}%</span> feature
          requests
        </div>
        <div className={styles.barLabel} style={{ left: `${bugLabelPos}%` }}>
          <span className={styles.percent}>{bugFrac}%</span> bug reports
        </div>
        <div className={styles.barLabel} style={{ left: `${otherLabelPos}%` }}>
          <span className={styles.percent}>{otherFrac}%</span> other
        </div>
      </div>
    </div>
  );
};

export default BarChart;
