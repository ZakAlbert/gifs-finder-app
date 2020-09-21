import React, { FC } from 'react';
import { CssBaseline, ThemeProvider, Container, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details, Search } from 'pages';
import AppTheme from 'theme/ThemeOption';
import { AppHeader } from 'components';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem'
  }
});

const App: FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Router>
        <AppHeader />
        <Container className={classes.root} >
          <Switch>
            <Route path="/details/:id" children={<Details />} />
            <Route path="/search/:keyword" children={<Search />} />
            <Route exact path="/" children={<Home />} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider >
  );
}

export default App;
