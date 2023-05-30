import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/basicSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
