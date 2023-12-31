import { combineReducers } from "redux";
import repositoriesReducer from "./reposetoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
