import React from "react";
import { Typography, useTheme } from "@mui/material";
import * as MUIcon from "@mui/icons-material";
import "./title.scss";

interface AtomTitleProps {
  text: string;
  subtitle?: string;
  iconName?: keyof typeof MUIcon;
  position?: "left" | "right";
  type?:"h1" | "h2" | "h3" | "h4" |"h5" | "h6";
}

const TitleAtom: React.FC<AtomTitleProps> = ({
  text,
  subtitle,
  iconName,
  position = "left",
  type = "h1",
}) => {
  const theme = useTheme();

  const getHeaderVariant = () => {
    switch (type) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";  
      case "h6":
          return "h6";  
      default:
        return "h5";
    }
  };

  const getHeaderStyle = () => {
    return theme.typography[type];
  };

  const Icon = iconName ? MUIcon[iconName] : null;

  return (
    <div className="heading-container flex-column">
      <div className="title">
        {iconName && position === "left" && Icon && (
          <Icon style={{ color: theme.palette.primary.main }} />
        )}
        <Typography variant={getHeaderVariant()} style={getHeaderStyle()}>
          {text}
        </Typography>
        {iconName && position === "right" && Icon && (
          <Icon style={{ color: theme.palette.primary.main }} />
        )}
      </div>
      {subtitle && (
        <div className="subtitle">
          <Typography variant="subtitle1">{subtitle}</Typography>
        </div>
      )}
    </div>
  );
};

export default TitleAtom;
