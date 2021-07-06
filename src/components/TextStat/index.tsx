import React from "react";
import styles from "./style.module.css";

interface TextStatProps {
  stat: number;
  type: "count" | "percentage" | "rating";
  desc: string;
}

const TextStat: React.FC<TextStatProps> = ({
  stat,
  type,
  desc,
}: TextStatProps): JSX.Element => {
  let statDisplay = "";
  if (type === "count") {
    // add thousands commas
    statDisplay = stat.toLocaleString();
  } else if (type === "percentage") {
    statDisplay = "+" + stat + "%";
  } else if (type === "rating") {
    // round to 1 dp
    statDisplay = stat.toFixed(1);
  }

  return (
    <div className={styles.textstat}>
      <h2>{statDisplay}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default TextStat;
