import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starReg } from "@fortawesome/free-regular-svg-icons";
import styles from "./style.module.css";

dayjs.extend(relativeTime);

interface ReviewProps {
  rating: number;
  text: string;
  date: dayjs.Dayjs;
}

const TextStat: React.FC<ReviewProps> = ({
  rating,
  text,
  date,
}: ReviewProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon icon={i < rating ? starSolid : starReg} key={i} />
    );
  }

  return (
    <div className={styles.review}>
      <div className={styles.stars}>{stars}</div>
      <div className={styles.textContainer}>
        <p>{text}</p>
        <p className={styles.date}>{dayjs(date).fromNow()}</p>
      </div>
    </div>
  );
};

export default TextStat;
