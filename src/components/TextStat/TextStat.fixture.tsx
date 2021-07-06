import React from "react";
import TextStat from "./index";

export default {
  count: <TextStat stat={6942069} type="count" desc="new reviews" />,
  percentage: <TextStat stat={22} type="percentage" desc="total reviews" />,
  rating: <TextStat stat={4.22} type="rating" desc="average rating" />,
};
