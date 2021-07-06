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
}: ReviewProps): JSX.Element => {
  return (
    <div className={styles.review}>
      <div className={styles.stars}>
        {[...Array(5)].map((_e, i) => {
          if (i < rating) {
            return <FontAwesomeIcon icon={starSolid} key={i} />;
          } else {
            return <FontAwesomeIcon icon={starReg} key={i} />;
          }
        })}
      </div>
      <div className={styles.textContainer}>
        <p>{text}</p>
        <p className={styles.date}>{dayjs(date).fromNow()}</p>
      </div>
    </div>
  );
};

export default TextStat;
