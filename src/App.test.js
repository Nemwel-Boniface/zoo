import { createStore, applyMiddleware, combineReducers } from 'redux';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ZooReducer from './redux/Zoo/Zoo';

const zoored = combineReducers({ animals: ZooReducer });
const middleWares = [thunk, logger];

const store = createStore(
  zoored,
  applyMiddleware(...middleWares),
);

afterEach(cleanup);
import ZooContainer from './ZooContainer';

describe('Test for the Zoo component', () => {
  test('Check whether the zoo page renders correctly', () => {
    const zoocont = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <ZooContainer />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(zoocont).toMatchSnapshot();
  });
});
