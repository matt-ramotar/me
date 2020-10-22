import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, Typography } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <AppBar position='sticky' style={{ backgroundColor: '#272525' }}>
      <Link to='/#about' className={classes.link}>
        <Typography variant='h6'>About</Typography>
      </Link>
      <Link to='/#projects' className={classes.link}>
        <Typography variant='h6'>Projects</Typography>
      </Link>
      <Link to='/#contact' className={classes.link}>
        <Typography variant='h6'>Contact</Typography>
      </Link>
    </AppBar>
  );
}
