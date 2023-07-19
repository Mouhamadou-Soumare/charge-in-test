import React, { useState } from 'react';
import './itemSidebar.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import * as MUIcon from "@mui/icons-material";
import { ListItemIcon } from '@mui/material';

interface SubItem {
  subItemText: string;
}

interface ItemSidebarProps {
  itemText: string;
  iconName?: keyof typeof MUIcon;
  subItems?: SubItem[];
}

const ItemSidebar: React.FC<ItemSidebarProps> = ({ itemText, iconName, subItems }) => {
  const Icon = iconName ? MUIcon[iconName] : null;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton className='item-nav' onClick={subItems ? handleToggle : undefined}>
          {Icon && (
            <ListItemIcon className='icon-nav'>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={itemText} />
          {subItems && (open ? <MUIcon.Minimize /> : <MUIcon.Add />)}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems &&
            subItems.map((subItem, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton className='sub-item-nav'>
                  <ListItemText primary={subItem.subItemText} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </div>
  );
};

export default ItemSidebar;
