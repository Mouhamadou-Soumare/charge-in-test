import React, { CSSProperties } from 'react';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import theme from "../../../style/theme";
import "./button.scss";

type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type ButtonType = 'form' | 'dashboard' | 'action';

interface ButtonAtomProps  {
  text: string;
  backgroundColor?: string;
  type: ButtonType;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  text,
  backgroundColor = theme.palette.primary.main,
  type,
  ...rest
}) => {
  const buttonStyle: CSSProperties = {
    backgroundColor,
   };

  const buttonClassName = `button-${type}`;

  return (
    <Button variant="contained" style={buttonStyle} className={buttonClassName} {...rest}>
      {text}
    </Button>
  );
};

export default ButtonAtom;
