import { ActionObjects } from "./types";
import { ItemObject } from "./types";
import actions from "./types";

let initialState = {
  articles: [],
};

const articleReducer = (state = initialState, action: ActionObjects) => {
  let { type, payload } = action;

  switch (type) {
    case actions.GET_ARTICLES:
      return payload;
    case actions.ADD_LIKE:
      let newState = [...state.articles];
      let output = newState.map((item: ItemObject) =>
        item === payload && !item.favorited
          ? {
              ...item,
              favorited: !item.favorited,
              favoritesCount: (item.favoritesCount + 1).toString(),
            }
          : item === payload && item.favorited
          ? {
              ...item,
              favorited: !item.favorited,
              favoritesCount: (item.favoritesCount - 1).toString(),
            }
          : item
      );
      return { articles: output };

    default:
      return state;
  }
};

export default articleReducer;

