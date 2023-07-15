import React from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from "@mui/material/Avatar";
import Logo from "../../../assets/img/logo/logo_charge_in.png";
import "./sidebar.scss";
import ItemSidebar from "../../atoms/ItemSidebar/itemSidebar";
import SectionTitleSidebar from "../../atoms/SectionTitleSidebar/sectionTitleSidebar";

const Sidebar: React.FC = () => {
    const drawerWidth = 300;

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        className="Sidebar"
      >
         <Avatar
            alt="Logo"
            src={Logo}
            sx={{ ml: 'auto' }}
            className='logo-nav'
          />
         <div className="group-item-sidebar">
            <List>
            <ItemSidebar itemText={"Acceuil"} iconName="ViewModule" />
            </List>
        </div>  
        <div className="group-item-sidebar">
            <SectionTitleSidebar text="Opportunités" />
            <List>
            <ItemSidebar itemText="Maisons" iconName="House" subItems={[{ subItemText: "En cours" }, { subItemText: "Archivés" }]} />
                <ItemSidebar itemText={"Appartements"} iconName="Home" subItems={[{ subItemText: "En cours" }, { subItemText: "Archivés" }]}  />
                <ItemSidebar itemText={"Etudes"} iconName="Apartment" subItems={[{ subItemText: "En cours" }, { subItemText: "Archivés" }]} />

            </List>
        </div>
        <div className="group-item-sidebar">
            <SectionTitleSidebar text="Utilisateurs" />
            <List>
                <ItemSidebar itemText={"CEO & Admins"} iconName="House"  />
                <ItemSidebar itemText={"Project Managers"} iconName="Home" />
                <ItemSidebar itemText={"Installateurs"} iconName="Apartment" />
                <ItemSidebar itemText={"Clients B2C"} iconName="Apartment" />
            </List>
        </div>
        <div className="group-item-sidebar">
            <SectionTitleSidebar text="Données" />
            <List>
                <ItemSidebar itemText={"Bornes"} iconName="House" />
                <ItemSidebar itemText={"Véhicules"} iconName="Home" />
                <ItemSidebar itemText={"Accessoires"} iconName="Apartment" />
                <ItemSidebar itemText={"Objectifs"} iconName="Apartment" />
            </List>
        </div>
       
      </Drawer>
    
    )
}


export default Sidebar;