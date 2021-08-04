import React, { useState } from "react";
import DropdownListContainer from "../DropdownContainer/DropdownListContainer";
import styles from "../DropdownContainer/style.module.css";

interface SelectComposition {
  Option: React.FC<SelectOptionProps>;
}

interface SelectProps {
  children: React.ReactElement[];
  onChangeHandler: (arg0: string) => void;
}

interface SelectOptionProps {
  children: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  children,
}: SelectOptionProps) => {
  return <>{children}</>;
};

const Select: React.FC<SelectProps> & SelectComposition = ({
  children,
  onChangeHandler,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const selectOption = (index: number): void => {
    setSelected(index);
    setIsOpen(false);
    onChangeHandler(children[index].props.children);
  };

  return (
    <DropdownListContainer
      title={children[selected]}
      width={140}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {React.Children.map(children, (child, index) => {
        return (
          child !== children[selected] && (
            <button
              className={`${styles.button} ${styles.buttonItem}`}
              onClick={() => selectOption(index)}
            >
              {child}
            </button>
          )
        );
      })}
    </DropdownListContainer>
  );
};

Select.Option = SelectOption;

export default Select;
