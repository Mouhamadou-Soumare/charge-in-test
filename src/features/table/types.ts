export interface TableData {
  estimate: string;
  station: number;
  step: number;
  name: string;
  action: number;
}

export interface HeadCellData {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}

export interface TableState {
  order: "asc" | "desc";
  orderBy: DataKey;
  page: number;
  rowsPerPage: number;
  rows: TableData[];
}

export type DataKey = keyof TableData;
