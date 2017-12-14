export const SHOW_PROJECTS = 'SHOW_PROJECTS';

export function showProjects(projects) {
  return {
    type: SHOW_PROJECTS,
    payload: projects
  };
}

export function reloadData() {
  return {
    type: 'RELOAD_DATA'
  };
}
