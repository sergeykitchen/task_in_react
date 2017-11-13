import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
  <div
    onClick={e => {
      e.preventDefault();
    }}
  >
    <Link to="/">POC</Link>
  </div>
);
