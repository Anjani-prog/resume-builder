import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import resumeReducer from "./reducer";

const reducers = {
  form: formReducer,
  resume: resumeReducer,
};
const reducer = combineReducers(reducers);
const store = configureStore({ reducer });

export default store;
