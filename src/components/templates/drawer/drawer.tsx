import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./drawer.scss";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setMobileOpen } from "../../../features/navSlice";
import { RootState } from "../../../app/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardHomepage from "../../../pages/DashboardHomepage/dashboardHomepage";
import notFound from "../../../pages/404/notFound";
import B2cList from "../../../pages/B2cList/B2cList";
import B2cProfil from "../../../pages/B2cProfil/B2cProfil";

const drawerWidth = 300;

export default function ResponsiveDrawer() {
  const mobileOpen = useAppSelector((state: RootState) => state.nav.mobileOpen);
  const dispatch = useAppDispatch();
  const handleDrawerToggle = () => {
    dispatch(setMobileOpen(!mobileOpen));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className="header-nav"
      >
        <Toolbar className="header-items">
          <div className="items-left">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="items-right">
            <Typography variant="body1" noWrap component="div">
              Bonjour, <span>Prénom Nom</span>
            </Typography>
            <IconButton size="small" aria-label="menu">
              <NotificationsActiveIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
        </Toolbar>
        <hr style={{ width: "100%" }} />
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { sm: "contents" },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          className="Sidebar"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          className="Sidebar"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path="/dashboard/b2c-list" component={B2cList} />
          <Route path="/dashboard/b2c-profil" component={B2cProfil} />
          <Route path="/dashboard" component={DashboardHomepage} />
          <Route component={notFound} />
        </Switch>
      </Box>
    </Box>
  );
}
