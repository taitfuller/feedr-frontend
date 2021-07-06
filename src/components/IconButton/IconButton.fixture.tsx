import React from "react";
import IconButton from "./index";
import { faFlag, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const dummyClick = (): void => {
  console.log("Click!");
};

export default {
  flag: <IconButton icon={faFlag} size="2x" handleOnClick={dummyClick} />,
  delete: <IconButton icon={faTrashAlt} size="2x" handleOnClick={dummyClick} />,
  close: <IconButton icon={faTimes} size="3x" handleOnClick={dummyClick} />,
};
