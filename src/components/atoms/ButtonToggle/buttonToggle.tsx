import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import "./buttonToggle.scss";

interface ButtonToggleProps {
  title: string;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ title }) => {
  return (
    <ToggleButton className="button-toggle" value="web">
      {title}
    </ToggleButton>
  );
};

export default ButtonToggle;
