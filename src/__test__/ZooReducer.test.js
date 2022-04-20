import ZooReducer from "../redux/Zoo/Zoo";
import { getAnimalsFromAPI } from "../redux/Zoo/Zoo";

const initialState = [];
describe('Tests for Redux in project', () => {
  it('Test if the state is initialy an empty array', () => {
    expect(ZooReducer(initialState, [])).toEqual([]);
  });

  it('Test if it returns a 10 items array', () => {
    expect(ZooReducer(initialState, getAnimalsFromAPI(['Plains Zebra', 'Magpie Goose', 'Fairy Bluebird', 'Black Rhinoceros', 'Mosquitofish', 'Grey Crowned Crane', 'Alpaca', 'Dyeing Poison Dart Frog', 'Green Tree Monitor', 'Blue-Crowned Motmot']))).not.toEqual(['Plains Zebra', 'Magpie Goose', 'Fairy Bluebird', 'Black Rhinoceros', 'Mosquitofish', 'Grey Crowned Crane', 'Alpaca', 'Dyeing Poison Dart Frog', 'Green Tree Monitor', 'Blue-Crowned Motmot']);
  });
});