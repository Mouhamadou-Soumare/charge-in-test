import React, { useState } from "react";
import TitleAtom from "../../atoms/Title/title";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CheckboxAtom from "../../atoms/CheckBox/checkbox";
import ButtonAtom from "../../atoms/Button/button";
import "./loginForm.scss";
import theme from "../../../style/theme";
import LabelInputMolecule from "../../molecules/labelInput/labelInput";
import { loginFailure, loginSuccess } from "../../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(""); 
  const dispatch = useAppDispatch();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    if (username === "demoUser@chargein.com" && password === "demoPassword") {
      dispatch(loginSuccess());
      window.location.href = "/accueil";
    } else {
      dispatch(loginFailure("Invalid credentials. Please try again."));
      setLoginStatus("failure"); 
    }
  };

  const handleCloseModal = () => {
    setLoginStatus(""); 
  };

  return (
    <Container component="main" className="form-login">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="login-controller">
          <TitleAtom
            text={"Se connecter"}
            iconName={"Login"}
            position="right"
            subtitle="Entrez vos identifiants pour accéder à votre espace personnel"
          />
        </div>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <div className="login-controller">
            <div className="email-password">
              <LabelInputMolecule
                inputValue={username}
                labelValue={"Adresse mail"}
                renderType={"input-form"}
                placeholder="adresse@mail.com"
                onChange={handleUsernameChange}
              />
              <LabelInputMolecule
                inputValue={password}
                labelValue={"Mot de passe"}
                renderType={"input-form"}
                placeholder="******"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-controller form-controller-footer">
              <CheckboxAtom
                label={"Se souvenir de moi"}
                checked={false}
                checkboxId={""}
              />
              <p>
                <span style={{ color: theme.palette.primary.main }}>
                  Mot de passe oublié ?
                </span>
              </p>
            </div>
          </div>
          <div className="login-controller">
            <ButtonAtom
              text={"Se connecter"}
              type="form"
              onClick={handleLogin}
            />
          </div>
        </Box>
      </Box>
      <Dialog open={loginStatus === "failure"} onClose={handleCloseModal}>
        <DialogTitle>Informations</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour accéder à la démonstration, veuillez utiliser les informations suivantes : demoUser@chargein.com/demoPassword.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default LoginForm;
