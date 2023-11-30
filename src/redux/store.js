import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as authReducer } from "./Authentication/reducer";
import { reducer as forumReducer } from "./Forum/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  forumReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
