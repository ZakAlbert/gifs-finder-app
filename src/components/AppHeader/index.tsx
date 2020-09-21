import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, AppBar, Toolbar, makeStyles, createStyles, Theme } from '@material-ui/core';

const useHeaderStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: theme.palette.divider,

  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "none"
    },
    "& > h5": {
      fontWeight: 'bold'
    }
  },
}));

const AppHeader: FC = () => {
  const classes = useHeaderStyles();

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Link component={RouterLink} to="/" className={classes.link}>
          <Typography variant="h5" noWrap>
            Gifs Finder
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
