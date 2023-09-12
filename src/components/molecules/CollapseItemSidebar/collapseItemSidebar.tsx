import React from "react";
import "./itemSidebar.scss";
import List from "@mui/material/List";
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
  const open: boolean = true;
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
