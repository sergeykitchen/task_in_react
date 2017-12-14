import {call, put, takeEvery, all} from 'redux-saga/effects';
import * as actions from '../actions';
import {deleteProject} from '../actions';

export function fetchData(url, method, id) {
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

export function* reloadData() {
  yield takeEvery('RELOAD_DATA', fetchProjects);
}

export default function* rootSaga() {
  yield all([reloadData(), fetchProjects()]);
}
