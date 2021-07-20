import React from "react";
import { useValue } from "react-cosmos/fixture";
import TextArea from "./index";

interface FunctionalTextAreaProps {
  label?: string;
  height?: number;
}

const FunctionalTextArea: React.FC<FunctionalTextAreaProps> = ({
  label = "",
  height = 75,
}) => {
  const [value, setValue] = useValue<string>("textValue", { defaultValue: "" });

  return (
    <TextArea
      label={label}
      textValue={value}
      onChangeHandler={setValue}
      height={height}
    />
  );
};

export default (
  <FunctionalTextArea
    label="What could be the potential root cause?"
    height={75}
  />
);
