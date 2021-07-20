import React from "react";
import { useValue } from "react-cosmos/fixture";
import TextField from "./index";

interface FunctionalTextFieldProps {
  label?: string;
  size?: "small" | "large";
}

const FunctionalTextField: React.FC<FunctionalTextFieldProps> = ({
  label = "",
  size = "large",
}) => {
  const [value, setValue] = useValue<string>("textValue", { defaultValue: "" });

  return (
    <TextField
      label={label}
      size={size}
      textValue={value}
      onChangeHandler={setValue}
    />
  );
};

export default {
  large: <FunctionalTextField label="Search..." size="large" />,
  small: <FunctionalTextField label="Search..." size="small" />,
};
