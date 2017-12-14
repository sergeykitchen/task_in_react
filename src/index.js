import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import mySaga from './sagas';

const store = configureStore();
store.runSaga(mySaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#container')
);
registerServiceWorker();
