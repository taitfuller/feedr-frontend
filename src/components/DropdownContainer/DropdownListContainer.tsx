import React from "react";
import DropdownContainer from "./index";
import styles from "./style.module.css";

interface DropdownListContainerComposition {
  Item: React.FC<DropdownListContainerItemProps>;
}

interface DropdownListContainerProps {
  title: string | React.ReactChild;
  width: number;
  children: React.ReactChild[];
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
}

interface DropdownListContainerItemProps {
  children: string;
  handleOnClick: React.MouseEventHandler;
}

const DropdownListContainerItem: React.FC<DropdownListContainerItemProps> = ({
  children,
  handleOnClick,
}: DropdownListContainerItemProps) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonItem}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

const DropdownListContainer: React.FC<DropdownListContainerProps> &
  DropdownListContainerComposition = ({
  title,
  width,
  children,
  isOpen,
  setIsOpen,
}: DropdownListContainerProps) => {
  return (
    <DropdownContainer
      title={title}
      width={width}
      overflow="none"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div style={{ width: "100%" }}>
        {React.Children.map(children, (child) => {
          return child;
        })}
      </div>
    </DropdownContainer>
  );
};

DropdownListContainer.Item = DropdownListContainerItem;

export default DropdownListContainer;
