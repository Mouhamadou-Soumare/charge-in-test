import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import LoginForm from "../../organisms/LoginForm/loginForm";
import "./login.scss";

const LoginTemplate: React.FC = () => {
  const handleLogin = (username: string, password: string): void => {};

  return (
    <Container component="main" className="login-container">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <LoginForm onLogin={handleLogin} />
      </Box>
    </Container>
  );
};

export default LoginTemplate;
