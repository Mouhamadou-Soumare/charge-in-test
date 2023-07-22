import * as React from "react";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

interface Props {
  active: boolean;
  direction: "asc" | "desc";
  onClick: () => void;
  children: React.ReactNode;
}

const SortableTableLabel: React.FC<Props> = ({
  active,
  direction,
  onClick,
  children,
}) => (
  <TableSortLabel active={active} direction={direction} onClick={onClick}>
    {children}
    {active ? (
      <Box component="span" sx={visuallyHidden}>
        {direction === "desc" ? "sorted descending" : "sorted ascending"}
      </Box>
    ) : null}
  </TableSortLabel>
);

export default SortableTableLabel;
