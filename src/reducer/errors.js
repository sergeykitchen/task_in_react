import {SHOW_ERROR} from '../actions';

export default function(error = null, action) {
  const {type, payload} = action;
  console.log(action);
  switch (type) {
    case SHOW_ERROR:
      return `${payload.name}: ${payload.message}`;
    default:
      return error;
  }
}
