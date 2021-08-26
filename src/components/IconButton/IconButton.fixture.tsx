import React from "react";
import IconButton from "./index";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const dummyClick = (): void => {
  console.log("Click!");
};

export default {
  delete: (
    <IconButton
      icon={faTrashAlt}
      size="2x"
      handleOnClick={dummyClick}
      variant="primary"
    />
  ),
  close: (
    <IconButton
      icon={faTimes}
      size="3x"
      handleOnClick={dummyClick}
      variant="secondary"
    />
  ),
};
