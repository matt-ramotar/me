const LOAD_CONTACT = 'contact/LOAD_CONTACT';

export const setContact = contact => {
  return {
    type: LOAD_CONTACT,
    contact,
  };
};

export const getContact = () => async dispatch => {
  const res = await fetch('/contact');
  if (res.ok) {
    const contact = await res.json();
    dispatch(setContact(contact));
  }
};

export default function contactReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_CONTACT:
      return { ...state, ...action.contact };
    default:
      return state;
  }
}
