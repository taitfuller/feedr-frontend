import React, { useState } from "react";
import DropdownListContainer from "../DropdownContainer/DropdownListContainer";

interface MenuComposition {
  Item: React.FC<MenuItemProps>;
}

interface MenuProps {
  title: string;
  width: number;
  children: React.ReactChild[];
}

interface MenuItemProps {
  children: string;
  handleOnClick: React.MouseEventHandler;
}

const Menu: React.FC<MenuProps> & MenuComposition = ({
  title,
  width,
  children,
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownListContainer
      title={title}
      width={width}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {children}
    </DropdownListContainer>
  );
};

Menu.Item = DropdownListContainer.Item;

export default Menu;
