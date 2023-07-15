import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#369C96',
      },
      secondary: {
        main: '#304399',
      },
      text: {
        primary: '#000000',
        secondary: '#fffffff',
      },
    },
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#00000',
      },
      body1: {
        fontSize: '1rem',
        color: '#000000',
      },
    },
  });
  
  export default theme;
  
