import { createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const colors = {
  blue: '#304399',
  white: '#ffffff',
  green: '#369C96',
  black: '#000',
  lightGray: '#8FA2A2',
  darkBlue: '#082537',
  lightBlue: '#6A93AC',
  mediumGray: '#6A6A6A',
  darkGray: '#0C354F',
  deeperBlue: '#0B3047',
  lightestGray: '#F4F8F6',
  red: '#A94442',
  transparent: 'transparent',
};

const typography: TypographyOptions = {
  h1: {
    color: colors.black,
    fontSize: '40px',
    fontWeight: 700,
  },
  h2: {
    color: colors.black,
    fontSize: '27px',
    fontWeight: 600,
  },
  h3: {
    color: colors.black,
    fontSize: '20px',
    fontWeight: 400,
  },
  h4: {
    color: colors.black,
    fontSize: '20px',
    fontWeight: 600,
  },
  h5: {
    color: colors.black,
    fontSize: '20px',
    fontWeight: 700,
  },
  h6: {
    color: colors.black,
    fontSize: '16px',
    fontWeight: 400,
  },
  subtitle1: {
    color: colors.black,
    fontSize: '16px',
  },
  subtitle2: {
    color: colors.black,
    fontSize: '16px',
    fontWeight: 700,
  },
  body1: {
    color: colors.black,
    fontSize: '14px',
    fontWeight: 400,
  },
  body2: {
    color: colors.black,
    fontSize: '14px',
    fontWeight: 600,
  },
  caption: {
    color: colors.lightBlue,
    fontSize: '18px',
  },
  overline: {
    color: colors.black,
    fontSize: '12px',
    fontWeight: 400,
  },
  
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.blue,
    },
    text: {
      primary: colors.black,
    },
  },
  typography: { ...typography },
});

export default theme;
