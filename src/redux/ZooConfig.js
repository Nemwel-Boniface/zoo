import { createStore,  applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import ZooReducer from "./Zoo/Zoo"

const middleWares = [thunk, logger ]

const store = createStore(
  ZooReducer,
  applyMiddleware(...middleWares)
)
export default store;