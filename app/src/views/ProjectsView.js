import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getProjects } from '../store/projects';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function ProjectsView({ getProjectsDispatcher, projects }) {
  const classes = useStyles();

  useEffect(() => async => {
    getProjectsDispatcher();
  });

  if (!projects) return null;

  return (
    <Grid container spacing={6}>
      {projects.map(project => (
        <Grid item xs={4}>
          <ProjectCard
            name={project.project}
            year={project.year}
            location={project.location}
            github={project.github}
            skills={project.skills}
            logo={project.logo}
            banner={project.banner}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default function ProjectsViewContainer() {
  const dispatch = useDispatch();
  const getProjectsDispatcher = () => dispatch(getProjects());
  const projects = useSelector(state => state.projects.list);
  return <ProjectsView getProjectsDispatcher={getProjectsDispatcher} projects={projects} />;
}
