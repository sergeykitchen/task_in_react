import {SHOW_PROJECTS} from '../actions';

const initialState = {
  projects: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SHOW_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    default:
      return state;
  }
};
