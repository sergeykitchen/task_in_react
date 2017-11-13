import React from 'react';
import {render} from 'react-dom';
import Content from './containers/Content';
import registerServiceWorker from './registerServiceWorker';

render(<Content />, document.querySelector('#container'));
registerServiceWorker();
