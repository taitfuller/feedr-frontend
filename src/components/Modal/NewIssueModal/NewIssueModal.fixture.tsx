import React from "react";
import NewIssueModal from "./index";

const dummyClick = (): void => {
  console.log("Click!");
};

export default <NewIssueModal show={true} onClose={dummyClick} />;
