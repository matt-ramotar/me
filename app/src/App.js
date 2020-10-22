import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Views from './views/Views';
import AboutView from './views/AboutView';
// import MenuAppBar from './components/AppBar';

function App() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(() => createMuiTheme());
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Views />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
