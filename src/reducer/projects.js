import {SHOW_PROJECTS} from '../actions';

export default (projects = null, action) => {
  const {type, payload} = action;

  switch (type) {
    case SHOW_PROJECTS:
      return [].concat(...payload);
    default:
      return projects;
  }
};
