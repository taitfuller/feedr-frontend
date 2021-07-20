import React from "react";
import Button from "./index";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const dummyClick = (): void => {
  console.log("Click!");
};

export default {
  primary: (
    <Button
      text={"Create new issue"}
      handleOnClick={dummyClick}
      disabled={false}
    />
  ),
  secondary: (
    <Button
      text={"View all reviews"}
      variant={"secondary"}
      handleOnClick={dummyClick}
      disabled={false}
    />
  ),
  github: (
    <Button
      text={"Sign in with GitHub"}
      icon={faGithub}
      variant={"github"}
      handleOnClick={dummyClick}
      disabled={false}
    />
  ),
};
