import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
  gridListRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: 650,
  },
  tile: {
    height: '100% !important',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export function ProjectsView({ getProjectsDispatcher, projects }) {
  const classes = useStyles();

  useEffect(() => async => {
    getProjectsDispatcher();
  });

  if (!projects) return null;

  return (
    <>
      <Box className={classes.gridListRoot} id='projects'>
        <GridList className={classes.gridList} cols={3.5}>
          {projects.map(project => (
            <GridListTile className={classes.tile}>
              {/* <img src={project.banner} /> */}
              {/* <GridListTileBar title={project.project} className={(classes.titleBar, classes.title)} /> */}
              <ProjectCard
                name={project.project}
                year={project.year}
                location={project.location}
                github={project.github}
                skills={project.skills}
                logo={project.logo}
                banner={project.banner}
              />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </>
  );
}

export default function ProjectsViewContainer() {
  const dispatch = useDispatch();
  const getProjectsDispatcher = () => dispatch(getProjects());
  const projects = useSelector(state => state.projects.list);
  return <ProjectsView getProjectsDispatcher={getProjectsDispatcher} projects={projects} />;
}
