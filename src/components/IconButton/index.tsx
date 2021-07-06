import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconButtonProps {
  icon: IconDefinition;
  type?: "button" | "submit" | "reset";
  size: SizeProp;
  handleOnClick: React.MouseEventHandler;
}

const Button: React.FC<IconButtonProps> = ({
  icon,
  type = "button",
  size,
  handleOnClick,
}: IconButtonProps): JSX.Element => {
  return (
    <button className={styles.iconButton} type={type} onClick={handleOnClick}>
      <FontAwesomeIcon icon={icon} size={size} />
    </button>
  );
};

export default Button;
