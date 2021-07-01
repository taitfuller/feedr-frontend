import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "github";
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleOnClick: React.MouseEventHandler;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  type = "button",
  handleOnClick,
  disabled = false,
}: ButtonProps): JSX.Element => {
  const buttonTypeStyle = styles[`button__${variant}`];

  return (
    <button
      className={`${styles.button} ${buttonTypeStyle}`}
      type={type}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
