import React from "react";
import { useValue } from "react-cosmos/fixture";
import DropdownContainer from "./index";

interface FunctionalDropdownContainerProps {
  title: string;
  children: React.ReactNode;
  overflow: "none" | "left" | "right";
  hideButtonWhenOpen?: boolean;
}

const FunctionalDropdownContainer: React.FC<FunctionalDropdownContainerProps> =
  ({
    title,
    children,
    overflow,
    hideButtonWhenOpen = false,
  }: FunctionalDropdownContainerProps) => {
    const [isOpen, setIsOpen] = useValue<boolean>("isOpen", {
      defaultValue: false,
    });

    return (
      <DropdownContainer
        title={title}
        overflow={overflow}
        hideButtonWhenOpen={hideButtonWhenOpen}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        {children}
      </DropdownContainer>
    );
  };

export default {
  noOverflow: (
    <FunctionalDropdownContainer title="No Overflow" overflow="none">
      <div style={{ width: "100%" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet libero non nibh pretium fermentum. Nam elementum massa nec tortor
          ullamcorper consequat. In gravida libero ac blandit placerat. Donec
          massa felis, consequat a lacinia vel, posuere pretium turpis. Morbi
          mauris quam, viverra porta pharetra eu, ultricies vitae risus.
          Maecenas tempus pretium nisi non placerat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent finibus, metus vitae placerat
          ullamcorper, diam velit maximus nisl, a consequat enim nunc in metus.
          Fusce gravida dolor et pretium efficitur. Etiam sit amet orci id nisl
          commodo dictum. Nam feugiat fermentum consectetur. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Etiam id risus dapibus, tempor tellus id, dictum odio.
          Praesent semper lorem diam, quis tincidunt nunc convallis id.
        </p>
      </div>
    </FunctionalDropdownContainer>
  ),
  leftOverflow: (
    <FunctionalDropdownContainer title="Left Overflow" overflow={"left"}>
      <div style={{ width: "250px", height: "300px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet libero non nibh pretium fermentum. Nam elementum massa nec tortor
          ullamcorper consequat. In gravida libero ac blandit placerat. Donec
          massa felis, consequat a lacinia vel, posuere pretium turpis. Morbi
          mauris quam, viverra porta pharetra eu, ultricies vitae risus.
          Maecenas tempus pretium nisi non placerat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent finibus, metus vitae placerat
          ullamcorper, diam velit maximus nisl, a consequat enim nunc in metus.
          Fusce gravida dolor et pretium efficitur. Etiam sit amet orci id nisl
          commodo dictum. Nam feugiat fermentum consectetur. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Etiam id risus dapibus, tempor tellus id, dictum odio.
          Praesent semper lorem diam, quis tincidunt nunc convallis id.
        </p>
      </div>
    </FunctionalDropdownContainer>
  ),
  rightOverflow: (
    <FunctionalDropdownContainer
      title="Right Overflow"
      overflow="right"
      hideButtonWhenOpen={true}
    >
      <div style={{ width: "500px", height: "200px" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet libero non nibh pretium fermentum. Nam elementum massa nec tortor
          ullamcorper consequat. In gravida libero ac blandit placerat. Donec
          massa felis, consequat a lacinia vel, posuere pretium turpis. Morbi
          mauris quam, viverra porta pharetra eu, ultricies vitae risus.
          Maecenas tempus pretium nisi non placerat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent finibus, metus vitae placerat
          ullamcorper, diam velit maximus nisl, a consequat enim nunc in metus.
          Fusce gravida dolor et pretium efficitur. Etiam sit amet orci id nisl
          commodo dictum. Nam feugiat fermentum consectetur. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Etiam id risus dapibus, tempor tellus id, dictum odio.
          Praesent semper lorem diam, quis tincidunt nunc convallis id.
        </p>
      </div>
    </FunctionalDropdownContainer>
  ),
};
