import {call, put, takeEvery, all} from 'redux-saga/effects';
import * as actions from '../actions';

export function fetchData(url, method) {
  return fetch(url, {method: method})
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return Promise.resolve(response);
    })
    .then(response => response.json());
}

export function* fetchProjects() {
  try {
    const projects = yield call(
      fetchData,
      `http://localhost:3000/projects`,
      'GET'
    );
    yield put(actions.showProjects(projects));
  } catch (error) {
    yield put(actions.showError(error));
  }
}

export function* fetchOneProject(action) {
  const id = action.payload;
  try {
    const project = yield call(
      fetchData,
      `http://localhost:3000/projects/${id}`,
      'GET'
    );

    yield put(actions.showProject(project));
  } catch (error) {
    yield put(actions.showError(error));
  }
}

export function* updateData() {
  yield takeEvery(actions.UPDATE_DATA, fetchProjects);
}

export function* loadProject() {
  yield takeEvery(actions.LOAD_ONE_PROJECT, fetchOneProject);
}

export default function* rootSaga() {
  yield all([fetchProjects(), updateData(), loadProject()]);
}
