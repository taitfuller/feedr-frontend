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
  const bugWidth = (bugCount / totalReviews) * 100;
  const bugAndFeatureWidth = ((featureCount + bugCount) / totalReviews) * 100;
  const otherWidth = (otherCount / totalReviews) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div
          className={`${styles.barFrac} ${styles.barBug}`}
          style={{ width: `${bugAndFeatureWidth}%` }}
        />
        <div
          className={`${styles.barFrac} ${styles.barFeature}`}
          style={{ width: `${featureWidth}%` }}
        />
      </div>
      <div
        className={styles.labels}
        style={{
          gridTemplateColumns: `minmax(135px, ${featureWidth}%) minmax(105px, ${bugWidth}%) minmax(65px, ${otherWidth}%)`,
        }}
      >
        <div className={styles.barLabel} style={{ gridColumn: 1 }}>
          <p>
            <span className={styles.percent}>{featureFrac}%</span> feature
            requests
          </p>
        </div>
        <div className={styles.barLabel} style={{ gridColumn: 2 }}>
          <p>
            <span className={styles.percent}>{bugFrac}%</span> bug reports
          </p>
        </div>
        <div className={styles.barLabel} style={{ gridColumn: 3 }}>
          <p>
            <span className={styles.percent}>{otherFrac}%</span> other
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
