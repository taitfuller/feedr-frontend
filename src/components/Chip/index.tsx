import React from "react";
import styles from "./style.module.css";

interface ChipProps {
  type: "bugReport" | "featureRequest";
}

const Chip: React.FC<ChipProps> = ({ type }: ChipProps) => {
  const chipTypeStyle = styles[`chip__${type}`];

  return (
    <div className={`${styles.chip} ${chipTypeStyle}`}>
      {type === "bugReport"
        ? "bug"
        : type === "featureRequest"
        ? "feature"
        : "other"}
    </div>
  );
};
export default Chip;
