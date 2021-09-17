import React from "react";
import { useValue } from "react-cosmos/fixture";
import StatsSummary from "./index";

const StatsSummaryFixture: React.FC = () => {
  const [feature] = useValue("feature", { defaultValue: 769 });
  const [bug] = useValue("bug", { defaultValue: 670 });
  const [other] = useValue("other", { defaultValue: 395 });
  const [oldReviews] = useValue("other", { defaultValue: 420 });
  const [avgRating] = useValue("avgRating", { defaultValue: 4.1 });
  const [topics] = useValue("topics", { defaultValue: 13 });

  return (
    <StatsSummary
      featureRequests={feature}
      bugReports={bug}
      other={other}
      oldReviews={oldReviews}
      topics={topics}
      averageRating={avgRating}
    />
  );
};

export default StatsSummaryFixture;
