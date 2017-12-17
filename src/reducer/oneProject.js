import {SHOW_PROJECT} from '../actions';

export default function oneProject(project = null, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_PROJECT:
      return Object.assign({}, payload);
    default:
      return project;
  }
}
