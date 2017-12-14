import {call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions';

export function fetchData(url, method) {
  return fetch(url, {method: method}).then(response => response.json());
}

export function* fetchProjects() {
  const projects = yield call(
    fetchData,
    'http://localhost:3000/projects',
    'GET'
  );
  yield put(actions.showProjects(projects));
}

export default function* root() {
  yield fork(fetchProjects);
}
