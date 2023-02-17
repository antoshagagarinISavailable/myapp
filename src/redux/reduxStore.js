import dialogsReducer from "./dialogsReducer";
import wallReducer from "./wallReducer";
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  wall: wallReducer,
});

let store = createStore(reducers);

export default store;
