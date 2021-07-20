import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "github";
  text: string;
  icon?: IconDefinition;
  type?: "button" | "submit" | "reset";
  handleOnClick: React.MouseEventHandler;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  icon,
  type = "button",
  handleOnClick,
  disabled = false,
}: ButtonProps) => {
  const buttonTypeStyle = styles[`button__${variant}`];

  return (
    <button
      className={`${styles.button} ${buttonTypeStyle}`}
      type={type}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {icon && (
        <FontAwesomeIcon className={styles.buttonIcon} icon={icon} size="2x" />
      )}
      {text}
    </button>
  );
};

export default Button;
