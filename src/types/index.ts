export type ReviewSummary = {
  featureRequests: number;
  bugReports: number;
  other: number;
  oldReviews: number;
  topics: number;
  averageRating: number;
};

export type Review = {
  _id: string;
  date: Date;
  platform: "iOS" | "Android";
  type: "bugReport" | "featureRequest" | "other";
  text: string;
  flag: boolean;
};

export type Topic = {
  _id: string;
  keywords: string[];
  summary: string;
  type: "bugReport" | "featureRequest";
  reviews: Review[];
};

export type TopicSummary = Topic & {
  counts: {
    newReviews: number;
    oldReviews: number;
    averageRating: number;
  };
};
