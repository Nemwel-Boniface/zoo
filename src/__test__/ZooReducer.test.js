import ZooReducer from "../redux/Zoo/Zoo";


const initialState = [];
describe('Tests for Redux in project', () => {
  it('Test if the state is initialy an empty array', () => {
    expect(ZooReducer(initialState, [])).toEqual([]);
  });
});