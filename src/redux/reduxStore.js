import dialogsReducer from "./dialogsReducer";
import wallReducer from "./wallReducer";
import usersReducer from "./usersReducer";
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  dialogs: dialogsReducer,
  wall: wallReducer,
  users: usersReducer,
});

let store = createStore(reducers);

export default store;
