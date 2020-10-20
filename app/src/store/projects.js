const LOAD_PROJECTS = 'projects/LOAD_PROJECTS';

export const setProjects = projects => {
  return {
    type: LOAD_PROJECTS,
    projects,
  };
};

export const getProjects = () => async dispatch => {
  const res = await fetch('/projects');
  if (res.ok) {
    const projects = await res.json();
    dispatch(setProjects(projects));
  }
};

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, list: action.projects };
    default:
      return state;
  }
}
