import { TableData, HeadCellData } from "./types";

function createData(
  name: string,
  station: number,
  estimate: string,
  step: number,
  action: number
): TableData {
  return {
    name,
    station,
    estimate,
    step,
    action,
  };
}

export const rows: TableData[] = [
  createData("Dupont", 1, "###", 1, 4.3),
  createData("Dubois", 2, "###", 2, 4.9),
  createData("Bethany", 5, "###", 4, 6.0),
  createData("Rae", 8, "###", 3, 5.0),
  createData("Caleb", 9, "###", 2, 3.9),
  createData("Morrow", 10, "###", 4, 6.5),
  createData("Stokes", 4, "###", 2, 4.3),
  createData("Jelly Bean", 8, "###", 4, 0.0),
  createData("KitKat", 7, "###", 5, 7.0),
  createData("Baldwin", 6, "###", 2, 0.0),
  createData("Marshmallow", 14, "###", 1, 2.0),
  createData("Lowery", 15, "###", 3, 37.0),
  createData("Shawn", 16, "###", 2, 4.0),
];

export const headCells: HeadCellData[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "NOM",
  },
  {
    id: "station",
    numeric: true,
    disablePadding: false,
    label: "BORNE CHOSIE",
  },
  {
    id: "estimate",
    numeric: true,
    disablePadding: false,
    label: "DEVIS",
  },
  {
    id: "step",
    numeric: true,
    disablePadding: false,
    label: "ÉTAPE",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "ACTIONS",
  },
];
