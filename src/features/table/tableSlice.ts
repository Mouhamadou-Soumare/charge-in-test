import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableData, HeadCellData, TableState } from "./types";
import { rows } from "./tableData";
import { RootState } from "../../app/store";

const initialState: TableState = {
  order: "asc",
  orderBy: "name",
  page: 0,
  rowsPerPage: 5,
  rows: rows,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<"asc" | "desc">) {
      state.order = action.payload;
    },
    setOrderBy(state, action: PayloadAction<keyof TableData>) {
      state.orderBy = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setRowsPerPage(state, action: PayloadAction<number>) {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { setOrder, setOrderBy, setPage, setRowsPerPage } =
  tableSlice.actions;
export const selectTable = (state: RootState) => state.table;

export default tableSlice.reducer;
