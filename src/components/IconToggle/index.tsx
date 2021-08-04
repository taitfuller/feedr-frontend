import React from "react";
import IconButton from "../IconButton";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconToggleProps {
  iconActive: IconDefinition;
  iconInactive: IconDefinition;
  size: SizeProp;
  checked: boolean;
  onChangeHandler: (arg0: boolean) => void;
}

const IconToggle: React.FC<IconToggleProps> = ({
  iconActive,
  iconInactive,
  size,
  checked,
  onChangeHandler,
}: IconToggleProps) => {
  return (
    <IconButton
      icon={checked ? iconActive : iconInactive}
      size={size}
      handleOnClick={() => onChangeHandler(!checked)}
    />
  );
};

export default IconToggle;
