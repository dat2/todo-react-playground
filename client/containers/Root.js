import { Provider } from 'react-redux';
import React from 'react';
import App from '../components/App';

import board from '../modules/todoListBoard';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const store = createStore(
  combineReducers({ board }),
  applyMiddleware(createLogger())
);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
