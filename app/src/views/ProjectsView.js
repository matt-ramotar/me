import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../store/projects';

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
