import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Logo from "../../../assets/img/logo/logo_charge_in.png";
import "./sidebar.scss";
import ItemSidebar from "../../atoms/ItemSidebar/itemSidebar";
import SectionTitleSidebar from "../../atoms/SectionTitleSidebar/sectionTitleSidebar";
import { useHistory, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const history = useHistory();
  const drawerWidth = 300;
  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <>
      <Avatar alt="Logo" src={Logo} sx={{ ml: "auto" }} className="logo-nav" />
      <div className="group-item-sidebar">
        <List>
          <ItemSidebar
            itemText={"Acceuil"}
            iconName="ViewModule"
            link="/dashboard"
            isActive={activeLink === "/dashboard"}
          />
        </List>
      </div>
      <div className="group-item-sidebar">
        <SectionTitleSidebar text="Opportunités" />
        <List>
          <ItemSidebar
            itemText="Maisons"
            iconName="House"
            link="/dashboard/b2c-list"
            isActive={activeLink === "/dashboard/b2c-list"}
            subItems={[
              { subItemText: "En cours", link: "/dashboard/b2c-list" },
              { subItemText: "Archivés" },
            ]}
          />
          <ItemSidebar
            itemText={"Appartements"}
            iconName="Home"
            subItems={[
              { subItemText: "En cours" },
              { subItemText: "Archivés" },
            ]}
          />
          <ItemSidebar
            itemText={"Etudes"}
            iconName="Apartment"
            subItems={[
              { subItemText: "En cours" },
              { subItemText: "Archivés" },
            ]}
          />
        </List>
      </div>
      <div className="group-item-sidebar">
        <SectionTitleSidebar text="Utilisateurs" />
        <List>
          <ItemSidebar itemText={"CEO & Admins"} iconName="Security" />
          <ItemSidebar itemText={"Project Managers"} iconName="Person" />
          <ItemSidebar itemText={"Installateurs"} iconName="Person" />
          <ItemSidebar itemText={"Clients B2C"} iconName="Person" />
        </List>
      </div>
      <div className="group-item-sidebar">
        <SectionTitleSidebar text="Données" />
        <List>
          <ItemSidebar itemText={"Bornes"} iconName="Bolt" />
          <ItemSidebar itemText={"Véhicules"} iconName="DirectionsCar" />
          <ItemSidebar itemText={"Accessoires"} iconName="Handyman" />
          <ItemSidebar itemText={"Objectifs"} iconName="PieChart" />
        </List>
      </div>
    </>
  );
};

export default Sidebar;
