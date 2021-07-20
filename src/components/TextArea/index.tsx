import React from "react";
import styles from "./style.module.css";

interface TextAreaProps {
  label?: string;
  textValue: string;
  onChangeHandler: (arg0: string) => void;
  disabled?: boolean;
  height?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label = "",
  textValue,
  onChangeHandler,
  disabled = false,
  height = 75,
}: TextAreaProps) => {
  return (
    <div className={styles.textareaContainer}>
      <label className={styles.textareaLabel}>{label}</label>
      <textarea
        className={styles.textarea}
        disabled={disabled}
        onChange={(e) => onChangeHandler(e.target.value)}
        value={textValue}
        style={{ height: height }}
      />
    </div>
  );
};

export default TextArea;
