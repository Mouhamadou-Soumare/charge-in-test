import React from "react";
import Box from "@mui/material/Box";
import "./objective.scss";
import LabelProgressBar from "../../molecules/LabelProgressBar/labelProgressBar";
import SubtitleDashboard from "../../atoms/SubtitleDashboard/subtitleDashboard";
import ButtonToggle from "../../atoms/ButtonToggle/buttonToggle";
const Objective: React.FC = () => {
  return (
    <Box className="objective-container">
      <div className="header-objective">
        <div>
          <SubtitleDashboard
            title="Objectifs de"
            titleWithColor="Charge-in"
            titleWhite
          />
        </div>
        <div className="group-toggle">
          <ButtonToggle title="1er Trimestre" />
          <ButtonToggle title="2ème Trimestre" />
          <ButtonToggle title="3ème Trimestre" />
          <ButtonToggle title="année 2023" />
        </div>
      </div>
      <div className="group-progress-bar">
        <LabelProgressBar  />
        <LabelProgressBar />
        <LabelProgressBar />
      </div>
    </Box>
  );
};

export default Objective;
