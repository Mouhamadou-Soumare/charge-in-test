import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { DataKey, HeadCellData } from "../../../features/table/types";
import SortableTableLabel from "../../atoms/TableSortLabel/TableSortLabel";
import "./tableHead.scss";

interface Props {
  onRequestSort: (property: DataKey) => void;
  order: "asc" | "desc";
  orderBy: DataKey;
  headCells: readonly HeadCellData[];
}

const TableHeadDash: React.FC<Props> = ({
  onRequestSort,
  order,
  orderBy,
  headCells,
}) => {
  const createSortHandler = (property: DataKey | keyof HeadCellData) => () => {
    if (typeof property === "string") {
      onRequestSort(property as DataKey);
    }
  };

  return (
    <TableHead className="table-head">
      <TableRow className="row">
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="title"
          >
            <SortableTableLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </SortableTableLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadDash;
