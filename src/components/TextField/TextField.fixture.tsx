import React from "react";
import { useValue } from "react-cosmos/fixture";
import TextField from "./index";

interface FunctionalTextFieldProps {
  label?: string;
  size?: "small" | "large";
  disabled?: boolean;
}

const FunctionalTextField: React.FC<FunctionalTextFieldProps> = ({
  label = "",
  size = "large",
  disabled = false,
}) => {
  const [value, setValue] = useValue<string>("textValue", { defaultValue: "" });

  return (
    <TextField
      label={label}
      size={size}
      textValue={value}
      onChangeHandler={setValue}
      disabled={disabled}
    />
  );
};

export default {
  large: (
    <FunctionalTextField label="Search..." size="large" disabled={false} />
  ),
  small: <FunctionalTextField label="Search..." size="small" />,
};
