import React from "react";
import Modal from "./index";

const dummyClick = (): void => {
  console.log("Click!");
};

export default (
  <Modal show={true} onClose={dummyClick} heading="Create new issue">
    <div>Test</div>
  </Modal>
);
