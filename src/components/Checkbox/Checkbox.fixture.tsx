import React, { useState } from "react";
import Checkbox from "./index";

const CheckboxFixture = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} label="Android" onChangeHandler={setChecked} />
  );
};

export default CheckboxFixture;
