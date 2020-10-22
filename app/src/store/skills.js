const LOAD_SKILLS = 'skills/LOAD_SKILLS';

export const setSkills = skills => {
  return {
    type: LOAD_SKILLS,
    skills,
  };
};

export const getSkills = () => async dispatch => {
  const res = await fetch('/skills');
  if (res.ok) {
    const skills = await res.json();
    dispatch(setSkills(skills));
  }
};

export default function skillsReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_SKILLS:
      return { ...state, ...action.skills };
    default:
      return state;
  }
}
