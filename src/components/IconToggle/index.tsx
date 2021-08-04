import React from "react";
import IconButton from "../IconButton";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconToggleProps {
  iconActive: IconDefinition;
  iconInactive: IconDefinition;
  variant?: "primary" | "secondary";
  size: SizeProp;
  checked: boolean;
  onChangeHandler: (arg0: boolean) => void;
}

const IconToggle: React.FC<IconToggleProps> = ({
  iconActive,
  iconInactive,
  variant,
  size,
  checked,
  onChangeHandler,
}: IconToggleProps) => {
  return (
    <IconButton
      icon={checked ? iconActive : iconInactive}
      variant={variant}
      size={size}
      handleOnClick={() => onChangeHandler(!checked)}
    />
  );
};

export default IconToggle;
