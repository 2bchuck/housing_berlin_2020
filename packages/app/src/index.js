import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/reducers';
import rootSaga from './store/sagas';

import './index.css';
import { HousesContainer } from './containers/HousesContainer';

axios.defaults.baseURL = 'http://localhost:4000/api'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HousesContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

