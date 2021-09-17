import React from "react";
import TopicTable from "./index";
import Card from "../Card";

export default (
  <Card>
    <TopicTable
      topics={[
        {
          _id: "614417bbef1760f1db981dd0",
          keywords: ["battery", "life"],
          summary: "After installing this app my battery became negative",
          type: "bugReport",
          reviews: [],
          counts: {
            newReviews: 69,
            increase: 22,
            averageRating: 5,
          },
        },
        {
          _id: "614417bbef1760f1db981dd1",
          keywords: ["dark", "mode"],
          summary:
            "Light mode sucks. Real developers use dark mode for everything",
          type: "featureRequest",
          reviews: [],
          counts: {
            newReviews: 420,
            increase: 109,
            averageRating: 4,
          },
        },
      ]}
    />
  </Card>
);
