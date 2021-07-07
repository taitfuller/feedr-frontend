import React, { FC } from "react";
import styles from "./style.module.css";

interface TextFieldProps {
  label?: string;
  textValue: string;
  onChangeHandler: (arg0: string) => void;
  disabled?: boolean;
  size?: "small" | "large";
}

const TextField: FC<TextFieldProps> = ({
  label = "",
  textValue,
  onChangeHandler,
  disabled = false,
  size = "large",
}: TextFieldProps) => {
  const sizeStyle = styles[`textfield__${size}`];

  return (
    <input
      className={`${styles.textfield} ${sizeStyle}`}
      disabled={disabled}
      onChange={(e) => onChangeHandler(e.target.value)}
      placeholder={label}
      type="text"
      value={textValue}
    />
  );
};

export default TextField;
