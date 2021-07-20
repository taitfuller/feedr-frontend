import React from "react";
import { useValue } from "react-cosmos/fixture";
import TextArea from "./index";

interface FunctionalTextAreaProps {
  label?: string;
  height?: number;
  disabled?: boolean;
}

const FunctionalTextArea: React.FC<FunctionalTextAreaProps> = ({
  label = "",
  height = 75,
  disabled = false,
}) => {
  const [value, setValue] = useValue<string>("textValue", { defaultValue: "" });

  return (
    <TextArea
      label={label}
      textValue={value}
      onChangeHandler={setValue}
      height={height}
      disabled={disabled}
    />
  );
};

export default (
  <FunctionalTextArea
    label="What could be the potential root cause?"
    height={75}
    disabled={false}
  />
);
