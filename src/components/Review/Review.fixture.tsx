import React from "react";
import Review from "./index";
import dayjs from "dayjs";

const shortReview = "Love this app";
const midReview =
  "This is filler text that will hopefully be replaced by something that makes sense.";
const longReview =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, quam sit amet pretium elementum, tellus quam rutrum ligula, at ornare mi urna in urna. Morbi ac sem ac massa porttitor sagittis et vitae ipsum. Donec commodo lectus id ligula pellentesque, id congue diam fermentum. Nam convallis rutrum eleifend. Proin et justo neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at sodales tellus, sed facilisis enim. Mauris et maximus sem.";

export default {
  fiveStar: (
    <Review
      rating={5}
      date={dayjs().subtract(6, "minute")}
      text={shortReview}
    />
  ),
  fourStar: (
    <Review rating={4} date={dayjs().subtract(9, "hour")} text={midReview} />
  ),
  threeStar: (
    <Review rating={3} date={dayjs().subtract(6, "day")} text={midReview} />
  ),
  twoStar: (
    <Review rating={2} date={dayjs().subtract(9, "month")} text={midReview} />
  ),
  oneStar: (
    <Review rating={1} date={dayjs().subtract(6, "year")} text={longReview} />
  ),
};
