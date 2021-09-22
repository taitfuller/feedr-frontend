import React from "react";
import ViewAllModal from "./index";
import { TopicSummary } from "../../../types";

const dummyClick = (): void => {
  console.log("Click!");
};

const example: TopicSummary = {
  _id: "614417bbef1760f1db981dd0",
  keywords: ["battery", "life"],
  summary: "After installing this app my battery became negative",
  type: "bugReport",
  reviews: [
    {
      _id: "614417bbef1760f1db981dd0",
      date: new Date(),
      platform: "iOS",
      type: "bugReport",
      rating: 3,
      text: "This is filler text that will hopefully be replaced by something that makes sense.",
      flag: false,
    },
    {
      _id: "614417bbef1760f1db981dd1",
      date: new Date(),
      platform: "iOS",
      type: "bugReport",
      rating: 5,
      text: "This is filler text that will hopefully be replaced by something that makes sense. This is filler text that will hopefully be replaced by something that makes sense. This is filler text that will hopefully be replaced by something that makes sense. This is filler text that will hopefully be replaced by something that makes sense. This is filler text that will hopefully be replaced by something that makes sense.",
      flag: false,
    },
    {
      _id: "614417bbef1760f1db981dd2",
      date: new Date(),
      platform: "iOS",
      type: "bugReport",
      rating: 4,
      text: "This is filler text that will hopefully be replaced by something that makes sense.",
      flag: false,
    },
  ],
  counts: {
    newReviews: 69,
    oldReviews: 22,
    averageRating: 5,
  },
};

export default (
  <ViewAllModal show={true} onClose={dummyClick} topic={example} />
);
