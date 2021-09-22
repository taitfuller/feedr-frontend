import React from "react";
import { TopicSummary } from "../../../types";
import Modal from "../index";
import TextStat from "../../TextStat";
import percentageIncrease from "../../../util/percentageIncrease";
import Chip from "../../Chip";
import Review from "../../Review";
import IconButton from "../../IconButton";
import { faFlag, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
// import { faFlag as faFlagSelected } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import dayjs from "dayjs";

interface ViewAllModalProps {
  show: boolean;
  onClose: () => void;
  topic: TopicSummary | undefined;
}

const ViewAllModal: React.FC<ViewAllModalProps> = ({
  show,
  onClose,
  topic,
}: ViewAllModalProps) => {
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
          stat={topic.counts.newReviews}
          type="count"
          desc="new reviews"
        />
        <TextStat
          stat={
            topic?.counts.oldReviews
              ? percentageIncrease(
                  topic.counts.newReviews,
                  topic.counts.oldReviews
                )
              : undefined
          }
          type="percentage"
          desc="total reviews"
        />
        <TextStat
          stat={topic.counts.averageRating}
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
              icon={faFlag}
              size="1x"
              handleOnClick={() => console.log()}
            />
            <IconButton
              icon={faTrashAlt}
              size="1x"
              handleOnClick={() => console.log()}
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ViewAllModal;
