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
              favoritesCount: !item.favoritesCount++,
            }
          : item === payload && item.favorited
          ? {
              ...item,
              favorited: !item.favorited,
              favoritesCount: !item.favoritesCount--,
            }
          : item
      );
      return { articles: output };

    default:
      return state;
  }
};

export default articleReducer;

// {
//   author: {
//     bio: 'bio',
//     following: false,
//     image: "https://static.productionready.io/images/smiley-cyrus.jpg",
//     username: "mahshid",
//   },
//   body: "66",
//   createdAt: "2021-08-30T15:45:03.690Z",
//   description: "the description",
//   favorited: false,
//   favoritesCount: 0,
//   slug: "66-76zbil",
//   tagList: [],
//   title: "the title",
//   updatedAt: "2021-08-30T15:45:03.690Z",
// },
