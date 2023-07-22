import React from "react";
import { Typography } from "@mui/material";
import "./subtitleDashboard.scss";

interface SubtitleDashboardProps {
  title: string;
  titleWithColor?: string;
  titleWhite?: boolean;
}

const SubtitleDashboard: React.FC<SubtitleDashboardProps> = ({
  title,
  titleWithColor,
  titleWhite,
}) => {
  const subtitleStyle = titleWhite ? { color: "#FFFFFF" } : {};

  return (
    <Typography
      variant="subtitle1"
      className="subtitle-dashboard"
      style={subtitleStyle}
    >
      {title} <span>{titleWithColor}</span>
    </Typography>
  );
};

export default SubtitleDashboard;
