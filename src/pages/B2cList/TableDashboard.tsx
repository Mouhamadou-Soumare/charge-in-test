import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHeadDash from "@components/molecules/TableHeadDash/TableHeadDash";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { TableData } from "features/table/types";
import { stableSort,getComparator } from "features/table/tableFunctions";
import { useAppDispatch , useAppSelector} from "app/hooks";
import { setOrder, setOrderBy, setPage, setRowsPerPage, selectTable } from "features/table/tableSlice";
import { DataKey } from "features/table/types";
import "./tableDashboard.scss";
import { headCells } from "features/table/tableData";
import StepTableRow from "@components/atoms/StepTableRow/stepTableRow";
import ActionTableRow from "@components/atoms/ActionTableRow/actionTableRow";

const TableDashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const { order, orderBy, page, rowsPerPage, rows } =
    useAppSelector(selectTable);

  const onRequestSort = (property: DataKey) => {
    const isAsc = orderBy === property && order === "asc";
    dispatch(setOrder(isAsc ? "desc" : "asc"));
    dispatch(setOrderBy(property));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  
  const handleEditClick = (row: TableData) => {
    console.log("Edit clicked for row:", row);
  };

  const handleDeleteClick = (row: TableData) => {
    console.log("Delete clicked for row:", row);
  };

  const handleViewMoreClick = (row: TableData) => {
    console.log("View More clicked for row:", row);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }} className="table-dash-container">
        <Toolbar
          sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}
          className="table-dash-header"
        >
          <Typography
            fontSize={18}
            fontWeight={800}
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            25 Résultats
          </Typography>
        </Toolbar>
        <TableContainer className="table-row-container">
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHeadDash
              onRequestSort={onRequestSort}
              order={order}
              orderBy={orderBy}
              headCells={headCells}
            />{" "}
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `table-checkbox-${index}`;

                return (
                  <TableRow
                    className="table-row"
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left" padding="none">
                      Borne Modèle {row.station}
                    </TableCell>
                    <TableCell align="left" padding="none">
                      {row.estimate}
                    </TableCell>
                    <TableCell align="left" padding="none">
                      <StepTableRow step={row.step} />
                    </TableCell>
                    <TableCell align="left" padding="none">
                    <ActionTableRow
                      onEditClick={() => handleEditClick(row)}
                      onDeleteClick={() => handleDeleteClick(row)}
                      onViewMoreClick={() => handleViewMoreClick(row)}
            />        
            </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (33 + 20) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelRowsPerPage="Lignes par page :"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="table-footer"
        />
      </Paper>
    </Box>
  );
};

export default TableDashboard;
