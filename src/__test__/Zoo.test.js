import { createStore, applyMiddleware, combineReducers } from 'redux';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ZooReducer from '../redux/Zoo/Zoo';
import Zoo from '../components/Zoo';

const zoored = combineReducers({ animals: ZooReducer });
const middleWares = [thunk, logger];

const store = createStore(
  zoored,
  applyMiddleware(...middleWares),
);

afterEach(cleanup);

describe('Test for the home Page', () => {
  test('Check whether the home page renders correctly', () => {
    const homePage = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Zoo />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(homePage).toMatchSnapshot();
  });
});