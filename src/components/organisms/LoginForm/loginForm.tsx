import React, { useState } from 'react';
import TitleAtom from '../../atoms/Title/title';
import InputAtom from '../../atoms/Input/input';
import TextInputAtom from '../../atoms/Input/input';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CheckboxAtom from '../../atoms/CheckBox/checkbox';
import ButtonAtom from '../../atoms/Button/button';
import './loginForm.scss';
import theme from '../../../style/theme';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username && password) {
      onLogin(username, password);
    }
  };

  return (
        <Container component="main" maxWidth="xs" className='form-login'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className='login-controller'>
          <TitleAtom text={'Se connecter'} iconName={"Login"} position='right' subtitle='Entrez vos identifiants pour accéder a votre espace personnel' />
          </div>  
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <div className="login-controller">
                <div className="form-controller">
                <InputAtom  inputValue={''} placeholder='adresse@mail.com' onChange={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } renderType={'input-form'} />
                </div>
                <div className="form-controller">
                <InputAtom  inputValue={''} placeholder='******'  onChange={function (value: string): void {
                        throw new Error('Function not implemented.');
                    } } renderType={'input-form'} />
                </div>
                <div className="form-controller form-controller-footer">
                    <CheckboxAtom label={'Se souvenir de moi'} checked={false} checkboxId={''} />
                    <p><span style={{color:theme.palette.primary.main}}>Mot de passe oublié ?</span></p>
                </div>
          
            </div>
            <div className="login-controller">
            <ButtonAtom text={'Se connecter'} type='form' />
             </div>
           
          </Box>
        </Box>
      </Container>
  );
};

export default LoginForm;
