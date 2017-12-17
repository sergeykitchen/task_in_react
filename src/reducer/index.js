import {combineReducers} from 'redux';
import projects from './projects';
import errors from './errors';
import oneProject from './oneProject';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  projects,
  errors,
  oneProject,
  form: formReducer
});
