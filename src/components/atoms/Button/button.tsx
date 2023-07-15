import React, { CSSProperties } from 'react';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import theme from "../../../theme";

type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';

interface ButtonProps extends MuiButtonProps {
  text: string;
  backgroundColor?: string;
  fontSize?: number;
  width?: number | string;
  height?: number | string;
  textTransform?: TextTransform;
}

const ButtonAtom: React.FC<ButtonProps> = ({
  text,
  backgroundColor = theme.palette.primary.main,
  fontSize = 18,
  width = '-webkit-fill-available',
  height = '61px',
  textTransform = 'none',
  ...rest
}) => {
  const buttonStyle: CSSProperties = {
    backgroundColor,
    fontSize: `${fontSize}px`,
    width,
    height,
    textTransform
  };

  return (
    <Button variant="contained" style={buttonStyle} {...rest}>
      {text}
    </Button>
  );
};

export default ButtonAtom;
