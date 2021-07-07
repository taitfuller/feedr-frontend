import React, { useState } from "react";
import TextArea from "./index";

const TextAreaFixture = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <TextArea
      label="What could be the potential root cause?"
      textValue={value}
      onChangeHandler={setValue}
      height={75}
    />
  );
};

export default TextAreaFixture;
