import React from "react";
import List from "@mui/material/List";
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
            itemText={"Accueil"}
            iconName="ViewModule"
            link="/accueil"
            isActive={activeLink === "/accueil"}
          />
        </List>
      </div>
      <div className="group-item-sidebar">
        <SectionTitleSidebar text="Opportunités" />
        <List>
          <ItemSidebar
            itemText="Maisons"
            iconName="House"
            link="/accueil/maisons"
            isActive={activeLink === "/accueil/maisons"}
            subItems={[
              { subItemText: "En cours", link: "/accueil/maisons" },
              { subItemText: "Archivés" }
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
