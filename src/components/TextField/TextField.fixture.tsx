import React, { useState } from "react";
import TextField from "./index";

const TextFieldFixture = (): JSX.Element => {
  const [value, setValue] = useState("");

  return (
    <>
      <TextField
        label="Search..."
        size="large"
        textValue={value}
        onChangeHandler={setValue}
      />
      <br />
      <TextField
        label="Search..."
        size="small"
        textValue={value}
        onChangeHandler={setValue}
      />
    </>
  );
};

export default TextFieldFixture;
