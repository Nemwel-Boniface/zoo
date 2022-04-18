import { Action } from "history";
import { GETFROMAPI } from "./actionTypes";

const baseURL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

let initialState = [];
const ZooReducer = (state = initialState, Action) => {
  switch(Action.type) {
    case GETFROMAPI:
      return [

      ]
    default:
      return state;
  }
}

const getAnimalsFromAPI = () => {

}

export default ZooReducer