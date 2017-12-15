import {combineReducers} from 'redux';
import projects from './projects';
import errors from './errors';
import oneProject from './oneProject';

export default combineReducers({
  projects,
  errors,
  oneProject
});
