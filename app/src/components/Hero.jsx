import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hero from '../sf.jpeg';
import headshot from '../0.jpeg';
import { useSelector } from 'react-redux';
import { Typography, Box, Paper, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    'min-height': 630,
  },
  hero: {
    backgroundImage: 'url(' + hero + ')',
    width: '100%',
    height: '300px',
    backgroundPosition: 'bottom',
    repeat: 'no-repeat',
    position: 'relative',
    'margin-top': '50px',
  },

  headshot: {
    position: 'absolute',
    left: '16.67%',
    top: 340,
  },
  about: {
    position: 'absolute',
    top: 460,
    left: '33%',
    width: '45%',
    'margin-left': '5%',
  },
  contact: {
    position: 'absolute',
    top: 540,
    width: '16.67%',
    left: '16.67%',
    'margin-right': '5%',
  },
  // listItem: {
  //   fontSize: '22px',
  // },
}));

export default function Hero() {
  const classes = useStyles();
  const contact = useSelector(state => state.contact);

  if (!contact) return null;

  return (
    <Box className={classes.root}>
      <Box className={classes.hero}></Box>
      <img
        src={headshot}
        style={{
          height: '200px',
          width: '200px',
          overflow: 'hidden',
          'border-radius': '50%',
          border: '5px solid white',
        }}
        className={classes.headshot}
      />
      <Paper className={classes.contact}>
        <Typography variant='h4'>{`${contact.nickname} ${contact.last}`}</Typography>
        <Typography variant='h6'>{contact.email}</Typography>
        <Typography variant='h6'>{contact.phone}</Typography>
      </Paper>
      <Paper className={classes.about}>
        <Typography variant='h3'>Hey! 👋</Typography>
        <Typography variant='h5'>Thoughtful and upbeat full stack engineer with SERN and MERN experience.</Typography>
        <List>
          <ListItem className={classes.listItem}>🌱 Currently working on Mighty and Paw Trails </ListItem>

          <ListItem className={classes.listItem}>
            🧰 Previously worked in healthcare research-consulting. In college I studied economics, biology, philosophy
          </ListItem>
          <ListItem className={classes.listItem}>❤️ Enjoy 🏃🏽‍♂️ running, 🥾 hiking, 🎿 skiing, 🎾 tennis</ListItem>
          <ListItem className={classes.listItem}>🐕‍🦺 Best friend of a 2-year-old Golden Retriever named Tag!</ListItem>
        </List>
      </Paper>
    </Box>
  );
}
