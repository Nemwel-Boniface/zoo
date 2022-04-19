import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ZooContainer from './ZooContainer';
import './stylesheets/ZooContainer.css';
import './stylesheets/Header.css';
import './stylesheets/Zoo.css';
import './stylesheets/landing.css';
import './stylesheets/details.css';
import store from './redux/ZooConfig';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ZooContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
