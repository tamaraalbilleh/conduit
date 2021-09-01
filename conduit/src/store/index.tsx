import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "./middleware/thunk";
import articleReducer from "./articlesReducer";
import tagsReducer from "./tagsReducer";
let reducers = combineReducers({
  articles: articleReducer,
  tags: tagsReducer,
});

const store = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export default store();
