import React from "react";
import Box from "@mui/material/Box";
import * as MUIcon from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import "./titleCard.scss";

interface TitleCardProps {
  iconName?: keyof typeof MUIcon;
  titleCard: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ iconName, titleCard }) => {
  const theme = useTheme();
  const Icon = iconName ? MUIcon[iconName] : null;

  return (
    <React.Fragment>
      {Icon ? (
        <Box className="title-card">
          <Icon style={{ color: theme.palette.primary.main }} />
          <Typography variant="body1">{titleCard}</Typography>
        </Box>
      ) : (
        <Box className="title-card-without-icon">
          <Typography style={theme.typography.h2}>{titleCard}</Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default TitleCard;
