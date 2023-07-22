import React from 'react';
import LoginTemplate from '../../components/templates/login/loginTemplate';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Avatar from '@mui/material/Avatar';
import Logo from "../../assets/img/logo/logo_charge_in.png";
import "./loginPage.scss";
import theme from '../../style/theme';


const Login: React.FC = () => {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="nav-form">
          <Toolbar>
            <IconButton size="small" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={theme.palette.primary.main}>
              Retour vers la page d’accueil
            </Typography>
            <Avatar alt="Logo" src={Logo} sx={{ ml: 'auto' }} className="logo-nav" />
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <LoginTemplate  />
      </div>
    </div>
  );
};

export default Login;
