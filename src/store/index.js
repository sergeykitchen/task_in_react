import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  };
}
