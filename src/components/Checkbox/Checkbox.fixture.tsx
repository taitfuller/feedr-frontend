import React from "react";
import { useValue } from "react-cosmos/fixture";
import Checkbox from "./index";

const CheckboxFixture = (): JSX.Element => {
  const [checked, setChecked] = useValue<boolean>("checked", {
    defaultValue: false,
  });

  return (
    <Checkbox checked={checked} label="Android" onChangeHandler={setChecked} />
  );
};

export default CheckboxFixture;
