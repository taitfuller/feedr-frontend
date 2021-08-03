import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownContainerProps {
  title: string | React.ReactChild;
  children: React.ReactNode;
  width?: number;
  overflow: "none" | "left" | "right";
  hideButtonWhenOpen?: boolean;
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  title,
  children,
  width,
  overflow,
  hideButtonWhenOpen = false,
  isOpen,
  setIsOpen,
}: DropdownContainerProps) => {
  return (
    <div className={styles.dropdown} style={{ width: width && `${width}px` }}>
      <button
        className={`${styles.button} ${
          !hideButtonWhenOpen && styles.buttonShowWhenOpen
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FontAwesomeIcon
          className={styles.dropdownCaret}
          icon={faCaretDown}
          rotation={isOpen ? 180 : undefined}
        />
      </button>
      <div
        className={`${styles.children} ${isOpen && styles.childrenOpen} ${
          overflow === "none" && styles.childrenNoOverflow
        } ${overflow === "left" && styles.childrenLeftOverflow} ${
          overflow === "right" && styles.childrenRightOverflow
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownContainer;
