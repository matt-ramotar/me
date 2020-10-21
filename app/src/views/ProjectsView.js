import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../store/projects';
import ProjectCard from './ProjectCard';

export function ProjectsView({ getProjectsDispatcher, projects }) {
  useEffect(() => async => {
    getProjectsDispatcher();
  });

  if (!projects) return null;

  return (
    <ul>
      {projects.map(project => (
        <div>
          <h1>{project.project}</h1>
          <h2>{project.year}</h2>
          <h2>{project.location}</h2>
          <h2>{project.github}</h2>
          <ProjectCard
            name={project.project}
            year={project.year}
            location={project.location}
            github={project.github}
            skills={project.skills}
            logo={project.logo}
            banner={project.banner}
          />
          <div>
            {project['skills-img'].split(',').map(src => {
              return <img src={src} height='28px' width='28px' />;
            })}
          </div>
          <li>
            {project.skills.split(',').map(skill => (
              <div>
                <code>{skill}</code>
              </div>
            ))}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default function ProjectsViewContainer() {
  const dispatch = useDispatch();
  const getProjectsDispatcher = () => dispatch(getProjects());
  const projects = useSelector(state => state.projects.list);
  return <ProjectsView getProjectsDispatcher={getProjectsDispatcher} projects={projects} />;
}
