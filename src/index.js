import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ZooContainer from './ZooContainer';
import './stylesheets/ZooContainer.css';
import './stylesheets/Header.css';
import './stylesheets/Zoo.css';
import './stylesheets/landing.css';
import store from './redux/ZooConfig';

ReactDOM.render(
  <Provider store={store}>
    <ZooContainer />
  </Provider>,
  document.getElementById('root'),
);
