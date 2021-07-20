import React, { useState } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface DropdownContainerProps {
  title: string;
  children: React.ReactNode;
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  title,
  children,
}: DropdownContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.text}>{title}</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          rotation={isOpen ? 180 : undefined}
        />
      </button>
      <div className={`${styles.children} ${isOpen && styles.childrenOpen}`}>
        {children}
      </div>
    </div>
  );
};

export default DropdownContainer;
