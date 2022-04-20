import { createStore, applyMiddleware, combineReducers } from 'redux';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ZooReducer from '../redux/Zoo/Zoo';
import Details from '../components/details';

const zoored = combineReducers({ animals: ZooReducer });
const middleWares = [thunk, logger];

const store = createStore(
  zoored,
  applyMiddleware(...middleWares),
);

afterEach(cleanup);

describe('Test for the details Page', () => {
  test('Check whether the details page renders correctly', () => {
    const detailsPage = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(detailsPage).toMatchSnapshot();
  });
});

describe("Test for each animal's details card", () => {
  test('Check whether the animals details Card renders correctly', () => {
    const animalsDetailsCard = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details
              id={124}
              name="Nigerian Dwarf Goat"
              image="https://upload.wikimedia.org/wikipedia/commons/f/fc/Nigerdwarfgoat.jpg"
              animalType="Mammal"
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(animalsDetailsCard).toMatchSnapshot();
  });
});
