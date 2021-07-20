import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChangeHandler: (arg0: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  label,
  onChangeHandler,
}: CheckboxProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label className={styles.label}>
        <input
          className={styles.checkboxHidden}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChangeHandler(e.target.checked)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <div
          className={`${styles.checkboxStyled} ${
            checked && styles.checkboxChecked
          } ${focused && styles.checkboxFocused}`}
        >
          <FontAwesomeIcon
            className={`${styles.checkIcon} ${
              !checked && styles.checkIconHidden
            }`}
            icon={faCheck}
            size="xs"
          />
        </div>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
