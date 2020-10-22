import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutView from './AboutView';
import ContactView from './ContactView';
import ProjectsViewContainer from './ProjectsView';
import { getLinks } from '../store/links';
import { getSkills } from '../store/skills';
import { getContact } from '../store/contact';
import blm from '../blm.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  blm: {
    backgroundImage: 'url(' + blm + ')',
    width: '100%',
    height: '380px',
    display: 'inline-block',
    overflow: 'hidden',
    backgroundPosition: 'bottom',
  },
}));

export function Views({ getLinksDispatcher, getSkillsDispatcher, getContactDispatcher, links, skills, contacts }) {
  const classes = useStyles();

  useEffect(() => async => {
    getLinksDispatcher();
    getSkillsDispatcher();
    getContactDispatcher();
  });

  return (
    <>
      <Hero />
      <Box className={classes.blm} />
      <ProjectsViewContainer />
    </>
  );
}

export default function ViewsContainer() {
  const dispatch = useDispatch();
  const getLinksDispatcher = () => dispatch(getLinks());
  const getSkillsDispatcher = () => dispatch(getSkills());
  const getContactDispatcher = () => dispatch(getContact());

  const links = useSelector(state => state.links.list);
  const skills = useSelector(state => state.skills.list);
  const contact = useSelector(state => state.contact.details);

  return (
    <Views
      getLinksDispatcher={getLinksDispatcher}
      getSkillsDispatcher={getSkillsDispatcher}
      getContactDispatcher={getContactDispatcher}
      links={links}
      skills={skills}
      contact={contact}
    />
  );
}
