export interface ReviewSummary {
  featureRequests: number;
  bugReports: number;
  other: number;
  oldReviews: number;
  topics: number;
  averageRating: number;
}

export interface Review {
  _id: string;
  date: Date;
  platform: "iOS" | "Android";
  type: "bugReport" | "featureRequest" | "other";
  rating: number;
  text: string;
  flag: boolean;
}

export interface Topic {
  _id: string;
  keywords: string[];
  summary: string;
  type: "bugReport" | "featureRequest";
  reviews: Review[];
}

export interface TopicSummary extends Topic {
  counts: {
    newReviews: number;
    oldReviews: number;
    averageRating: number;
  };
}

export interface Feed {
  _id: string;
  appName: string;
  repoName: string;
}

export interface User {
  _id: string;
  githubId: number;
  displayName: string;
  feeds: Feed[];
}
