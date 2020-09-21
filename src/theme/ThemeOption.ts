import { ThemeOptions, createMuiTheme } from '@material-ui/core';

const themeConfig: ThemeOptions = {
  palette: {
    type: 'dark',
    background: {
      default: '#000'
    },
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#000"
    }
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Roboto Mono", H elvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  }
};

const AppTheme = createMuiTheme(themeConfig);

export default AppTheme;
