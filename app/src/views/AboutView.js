import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem } from '@material-ui/core';
import headshot from '../0.jpeg';
import hero from '../hero.jpeg';

import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({}));

export default function AboutView() {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
        <Typography variant='h3'>About</Typography>
        <Typography variant='h6'>
          Thoughtful and upbeat full stack engineer with SERN and MERN experience. Author of multiple peer-reviewed
          articles and original research investigations. Enjoy hiking, running, skiing, tennis. Also interested in
          classics, economics, metaphysics, political philosophy. Best friend of a 2-year-old Golden Retriever named Tag
        </Typography>
        <List>
          <ListItem variant='h6'>🌱 Currently working on Mighty and Paw Trails </ListItem>

          <ListItem>
            🧰 Previously worked in healthcare research-consulting. In college I studied economics, biology, philosophy
          </ListItem>
          <ListItem>❤️ Enjoy 🏃🏽‍♂️ running, 🥾 hiking, 🎿 skiing, 🎾 tennis</ListItem>
          <ListItem>🐕‍🦺 Best friend of a 2-year-old Golden Retriever named Tag!</ListItem>
        </List>
      </Paper>
    </Box>
  );
}
