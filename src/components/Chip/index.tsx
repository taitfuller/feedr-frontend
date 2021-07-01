import React from "react";
import styles from "./style.module.css";

interface ChipProps {
  type: "bug" | "feature";
}

const Chip: React.FC<ChipProps> = ({ type }: ChipProps): JSX.Element => {
  const chipTypeStyle = styles[`chip__${type}`];

  return <div className={`${styles.chip} ${chipTypeStyle}`}>{type}</div>;
};

export default Chip;
