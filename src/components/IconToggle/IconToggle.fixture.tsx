import React from "react";
import IconToggle from "./index";
import { useValue } from "react-cosmos/fixture";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { faFlag as fasFlag } from "@fortawesome/free-solid-svg-icons";

const IconToggleFixture: React.FC = () => {
  const [checked, setChecked] = useValue<boolean>("checked", {
    defaultValue: false,
  });

  return (
    <IconToggle
      iconActive={fasFlag}
      iconInactive={faFlag}
      size="2x"
      checked={checked}
      onChangeHandler={setChecked}
    />
  );
};

export default IconToggleFixture;
