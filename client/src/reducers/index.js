/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";

// Import All reducers
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
// import questionsReducer from "./questions";
// import usersReducer from "./users";

export default combineReducers({
  authReducer,
  currentUserReducer,
});
