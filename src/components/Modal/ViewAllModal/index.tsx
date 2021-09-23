import React, { useMemo } from "react";
import { Topic } from "../../../types";
import Modal from "../index";
import TextStat from "../../TextStat";
import Chip from "../../Chip";
import Review from "../../Review";
import IconButton from "../../IconButton";
import { faFlag, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faFlag as faFlagged } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import dayjs from "dayjs";

interface ViewAllModalProps {
  show: boolean;
  onClose: () => void;
  topic: Topic | undefined;
  onFlag: (id: string, value: boolean) => void;
  onRemove: (id: string) => void;
}

const ViewAllModal: React.FC<ViewAllModalProps> = ({
  show,
  onClose,
  topic,
  onFlag,
  onRemove,
}: ViewAllModalProps) => {
  const averageRating = useMemo(
    () =>
      topic &&
      topic.reviews.reduce((sum, review) => sum + review.rating, 0) /
        topic.reviews.length,
    [topic]
  );

  if (!topic)
    return (
      <Modal show={show} onClose={onClose} heading={"Error"}>
        <p>Something went wrong while retrieving topic details :(</p>
      </Modal>
    );

  return (
    <Modal
      show={show}
      onClose={onClose}
      heading={"All reviews for " + topic.keywords.join(", ")}
    >
      <div className={styles.stats}>
        <Chip type={topic.type} />
        <TextStat
          stat={topic.reviews.length}
          type="count"
          desc="total reviews"
        />
        <TextStat
          stat={averageRating ?? 0}
          type="rating"
          desc="average rating"
        />
      </div>
      <div className={styles.reviewContainer}>
        {topic?.reviews.map((review) => (
          <div key={review._id} className={styles.review}>
            <Review
              rating={review.rating}
              date={dayjs(review.date).subtract(9, "hour")}
              text={review.text}
            />
            <IconButton
              icon={review.flag ? faFlagged : faFlag}
              size="1x"
              handleOnClick={() => onFlag(review._id, !review.flag)}
            />
            <IconButton
              icon={faTrashAlt}
              size="1x"
              handleOnClick={() => onRemove(review._id)}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ViewAllModal;
