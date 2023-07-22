import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import "./itemSidebar.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as MUIcon from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";

interface CollapseItemSidebarProps {
  itemText: string;
  iconName?: keyof typeof MUIcon;
}

const CollapseItemSidebar: React.FC<CollapseItemSidebarProps> = ({
  itemText,
  iconName,
}) => {
  const Icon = iconName ? MUIcon[iconName] : null;

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItemButton>
      </List>
    </Collapse>
  );
};

export default CollapseItemSidebar;
