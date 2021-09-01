interface ActionTypes {
  GET_ARTICLES: string;
  GET_TAGS: string;
  ADD_LIKE: string;
  SIGNUP_ERRORS: string;
  SIGNIN_ERRORS: string;
}
export interface ItemObject {
  author: {
    bio: null | string;
    following: Boolean;
    image: string;
    username: string;
  };
  body: string;
  createdAt: string;
  description: string;
  favorited: false;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
const actions: ActionTypes = {
  GET_ARTICLES: "GET_ARTICLES",
  GET_TAGS: "GET_TAGS",
  ADD_LIKE: "ADD_LIKE",
  SIGNUP_ERRORS: "SIGNUP_ERRORS",
  SIGNIN_ERRORS: "SIGNIN_ERRORS",
};

export interface ActionObjects {
  type: string;
  payload: object | string[];
}
export default actions;
