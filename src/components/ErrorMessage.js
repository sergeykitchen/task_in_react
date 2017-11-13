import React from 'react';

export default props => {
  let message = '';
  switch (props.error) {
    case 'Not Found':
      message = 'There is no project with this id in the database';
      break;
    default:
      message = props.error;
      break;
  }

  return (
    <div className="error">
      <h3>{message}</h3>
    </div>
  );
};
