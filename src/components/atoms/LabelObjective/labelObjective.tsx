import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./labelObjective.scss";

const LabelObjective: React.FC = () => {
  return (
    <Box className="objective-label">
      <Typography
        className="number"
        variant="caption"
        display="block"
        gutterBottom
      >
        50 partenaires
      </Typography>
      <Typography className="state" variant="subtitle2" gutterBottom>
        En cours
      </Typography>
    </Box>
  );
};

export default LabelObjective;
