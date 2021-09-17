import React from "react";
import DetailView from "./index";
import Card from "../Card";

export default {
  selected: (
    <div style={{ width: "403px" }}>
      <Card>
        <DetailView
          topic={{
            _id: "614417bbef1760f1db981dd0",
            keywords: ["battery", "life"],
            summary: "After installing this app my battery became negative",
            type: "bugReport",
            reviews: [],
            counts: {
              newReviews: 69,
              oldReviews: 22,
              averageRating: 5,
            },
          }}
        />
      </Card>
    </div>
  ),
  unselected: (
    <div style={{ width: "403px" }}>
      <Card>
        <DetailView topic={undefined} />
      </Card>
    </div>
  ),
};
