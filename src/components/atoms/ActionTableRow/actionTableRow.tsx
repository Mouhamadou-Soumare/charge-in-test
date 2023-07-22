import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableCell from "@mui/material/TableCell";
import './actionTableRow.scss';

interface ActionTableRowProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
    onViewMoreClick: () => void;
  }
  
  const ActionTableRow: React.FC<ActionTableRowProps> = ({
    onEditClick,
    onDeleteClick,
    onViewMoreClick,
  }) => {
    return (
      <TableCell align="left" padding="none" className="action-table-row">
        <IconButton onClick={onEditClick} className="icon">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDeleteClick} className="icon">
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={onViewMoreClick} className="icon">
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    );
  };
  
  export default ActionTableRow;
  