import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./itemSidebar.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import * as MUIcon from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";

interface SubItem {
  subItemText: string;
  link?: string;
  isActive?: boolean;
}

interface ItemSidebarProps {
  itemText: string;
  iconName?: keyof typeof MUIcon;
  subItems?: SubItem[];
  link?: string;
  isActive?: boolean;
}

const ItemSidebar: React.FC<ItemSidebarProps> = ({
  itemText,
  iconName,
  subItems,
  link,
  isActive = false,
}) => {
  const Icon = iconName ? MUIcon[iconName] : null;
  const [open, setOpen] = useState(false);
  const isItemActive = isActive;

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem disablePadding>
        {link ? (
          <Link
            to={link}
            className={`item-nav${isItemActive ? " active" : ""}`}
          >
            <ListItemButton
              className={`item-nav${isItemActive ? " active" : ""}`}
              onClick={subItems ? handleToggle : undefined}
            >
              {Icon && (
                <ListItemIcon className="icon-nav">
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText primary={itemText} />
              {subItems && (open ? <MUIcon.Minimize /> : <MUIcon.Add />)}
            </ListItemButton>
          </Link>
        ) : (
          <ListItemButton
            className={`item-nav ${isItemActive ? " active" : ""}`}
            onClick={subItems ? handleToggle : undefined}
          >
            {Icon && (
              <ListItemIcon className="icon-nav">
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText primary={itemText} />
            {subItems && (open ? <MUIcon.Minimize /> : <MUIcon.Add />)}
          </ListItemButton>
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems &&
            subItems.map((subItem, index) => (
              <ListItem disablePadding key={index} className="sub-item">
                {subItem.link ? (
                  <Link to={subItem.link} className="link">
                    <ListItemButton className="sub-item-nav">
                      <ListItemText primary={subItem.subItemText} />
                    </ListItemButton>
                  </Link>
                ) : (
                  <ListItemButton className="sub-item-nav">
                    <ListItemText
                      primary={subItem.subItemText}
                      className="text"
                    />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
        </List>
      </Collapse>
    </div>
  );
};

export default ItemSidebar;
