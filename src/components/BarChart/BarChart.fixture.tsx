import React from "react";
import { useValue } from "react-cosmos/fixture";
import BarChart from "./index";

const BarChartFixture = (): JSX.Element => {
  const [feature] = useValue("feature", { defaultValue: 1000 });
  const [bug] = useValue("bug", { defaultValue: 700 });
  const [other] = useValue("other", { defaultValue: 300 });

  return <BarChart featureCount={feature} bugCount={bug} otherCount={other} />;
};

export default BarChartFixture;
