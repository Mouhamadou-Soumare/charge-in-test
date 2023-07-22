import React, { CSSProperties, MouseEvent } from "react";
import Button from "@mui/material/Button";
import theme from "../../../style/theme";
import "./button.scss";
import * as MUIcon from "@mui/icons-material";

type TextTransform = "capitalize" | "uppercase" | "lowercase" | "none";
type ButtonType = "form" | "dashboard" | "action";

interface ButtonAtomProps {
  text: string;
  backgroundColor?: string;
  type: ButtonType;
  iconName?: keyof typeof MUIcon;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  text,
  backgroundColor = theme.palette.primary.main,
  type,
  iconName,
  onClick,
  ...rest
}) => {
  const buttonStyle: CSSProperties = {
    backgroundColor,
  };

  const Icon = iconName ? MUIcon[iconName] : null;

  const buttonClassName = `button-${type}`;
  return (
    <Button
      variant="contained"
      style={buttonStyle}
      className={buttonClassName}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />} {text}
    </Button>
  );
};

export default ButtonAtom;
