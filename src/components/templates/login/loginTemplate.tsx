import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import LoginForm from '../../organisms/LoginForm/loginForm';
import "./login.scss";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginTemplate: React.FC<LoginFormProps> = ({ onLogin }) => {
 

  return (
    <Container component="main"  className='login-container'>
    <CssBaseline />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
          <LoginForm onLogin={function (username: string, password: string): void {
                  throw new Error('Function not implemented.');
              } } />
          
          </Box>
      </Container>  );
};

export default LoginTemplate;
