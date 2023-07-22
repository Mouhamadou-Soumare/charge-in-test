import React from "react";
import TextField from "@mui/material/TextField";
import "./input.scss";

interface InputAtomProps {
  inputValue: string;
  placeholder?: string;
  renderType: "input-form" | "input-back-office";
  onChange: (value: string) => void;
}

const InputAtom: React.FC<InputAtomProps> = ({
  inputValue,
  renderType,
  placeholder,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      placeholder={placeholder}
      variant="standard"
      size="small"
      className="input-login"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default InputAtom;
