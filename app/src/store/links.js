const LOAD_LINKS = 'links/LOAD_LINKS';

export const setLinks = links => {
  return {
    type: LOAD_LINKS,
    links,
  };
};

export const getLinks = () => async dispatch => {
  const res = await fetch('/links');
  if (res.ok) {
    const links = await res.json();
    dispatch(setLinks(links));
  }
};

export default function linksReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_LINKS:
      return { ...state, ...action.links };
    default:
      return state;
  }
}
