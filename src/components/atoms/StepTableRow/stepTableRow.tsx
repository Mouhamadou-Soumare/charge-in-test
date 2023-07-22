import * as React from "react";
import TableCell from "@mui/material/TableCell";

interface StepTableRowProps {
  step: number;
}

const StepTableRow: React.FC<StepTableRowProps> = ({ step }) => {
  const getBackgroundColor = (step: number): string => {
    switch (step) {
      case 1:
        return "rgba(54, 156, 150, 0.10)";
      case 2:
        return "rgba(232, 176, 92, 0.10)"; 
      case 3:
        return "rgba(158, 121, 236, 0.10)"; 
      case 4:
        return "rgba(240, 116, 161, 0.10) "; 
      default:
        return "transparent"; 
    }
  };

  const getTextColor = (step: number): string => {
    switch (step) {
      case 1:
        return "#369C96"; 
      case 2:
        return "#E8B05C"; 
      case 3:
        return "#9E79EC"; 
      case 4:
        return "#F074A1"; 
      default:
        return "#000000"; 
    }
  };


  const backgroundColor = getBackgroundColor(step);
  const textColor = getTextColor(step);

  return (
    <TableCell align="left" padding="none" style={{ backgroundColor ,color:textColor , padding:"8px", borderRadius:"4px"}} >
      Étapes {step}
    </TableCell>
  );
};

export default StepTableRow;
