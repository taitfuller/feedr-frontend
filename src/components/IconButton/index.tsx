import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  icon: IconDefinition;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size: SizeProp;
  handleOnClick: React.MouseEventHandler;
}

const Button: React.FC<IconButtonProps> = ({
  icon,
  type = "button",
  variant = "primary",
  size,
  handleOnClick,
}: IconButtonProps) => {
  const buttonTypeStyle = styles[`button__${variant}`];

  return (
    <button
      className={`${styles.iconButton} ${buttonTypeStyle}`}
      type={type}
      onClick={handleOnClick}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Button;
