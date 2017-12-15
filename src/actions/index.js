export const SHOW_PROJECTS = 'SHOW_PROJECTS';
export const SHOW_ERROR = 'SHOW_ERROR';
export const UPDATE_DATA = 'UPDATE_DATA';
export const LOAD_ONE_PROJECT = 'LOAD_ONE_PROJECT';
export const SHOW_PROJECT = 'SHOW_PROJECT';

export function showProjects(projects) {
  return {
    type: SHOW_PROJECTS,
    payload: projects
  };
}

export function updateData() {
  return {
    type: UPDATE_DATA
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: error
  };
}

export function loadProject(id) {
  return {
    type: LOAD_ONE_PROJECT,
    payload: id
  };
}

export function showProject(project) {
  return {
    type: SHOW_PROJECT,
    payload: project
  };
}
