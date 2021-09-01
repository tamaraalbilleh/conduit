import jwt from "jsonwebtoken";
import cookie from "react-cookies";
import  { Redirect } from 'react-router-dom'
import axios from "axios";
import actions from "./types";
import { ItemObject } from "./types";
// import base64 from 'base-64';
// async calls
export const getArticles = (url: string) => (dispach: any, state: object) => {
  return axios
    .get(url)
    .then((res) => dispach(articles(res.data)))
    .catch((err) => console.error(err));
};

export const getTags = (url: string) => (dispach: any, state: object) => {
  return axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })

    .then((res) => dispach(tags(res.data)))
    .catch((err) => console.error(err));
};

export const postLike = (item: ItemObject) => (dispach: any, state: object) => {
  let url: string = `https://conduit.productionready.io/api/articles/${item.slug}/favorite`;
  return axios
    .put(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      cache: "no-cache",
      mode: "cors",
      body: JSON.stringify({ ...item, favorited: !item.favorited }),
    })
    .then((res) => console.log("updated ", res.data))
    .catch((err) => console.error(err));
};

export const signup =
  (user: { user: { username: string; password: string; email: string } }) =>
  (dispach: any, state: object) => {
    let url = "https://conduit.productionready.io/api/users";

    return axios
      .post(url, user)
      .then((res) => {
        let usersignin: { user: { email: string; password: string } } = {
          user: { email: user.user.email, password: user.user.password },
        };
        console.log(res.status);
        res.status < 300 && res.status >= 200
          ? dispach(signin(usersignin))
          : dispach(redisterError(res.data));
      })
      .catch((err) => console.error(err));
  };

export const signin =
  (user: { user: { password: string; email: string } }) =>
  (dispach: any, state: object) => {
    let url = "https://conduit.productionready.io/api/users/login";

    console.log(user);
    return axios
      .post(url, user)
      .then((res) => tokenValidator(res.data.user.token))
      .catch((err) => console.error(err));
  };

const tokenValidator = function (token: string) {
  try {
    let user = jwt.decode(token);
    if (user) {
      isLoggedIn(!!user, token, user);
    }
  } catch (error) {
    isLoggedIn(false, "", {});
  }
};

const isLoggedIn = function (
  loggedIn: null | Boolean,
  token: string | Number | Object,
  user: any
) {
  if (loggedIn) {
    cookie.save("auth", token, { path: "/" });
    return <Redirect to='/'  />
  }
};

export const signOut = function () {
  cookie.remove("auth");
  window.location.reload();
};

// actions
export const articles = (payload: string[]) => ({
  type: actions.GET_ARTICLES,
  payload,
});

export const tags = (payload: string[]) => ({
  type: actions.GET_TAGS,
  payload,
});

export const liked = (payload: object) => ({
  type: actions.ADD_LIKE,
  payload,
});

export const redisterError = (payload: object) => ({
  type: actions.SIGNUP_ERRORS,
  payload,
});

export const loginErrors = (payload: object) => ({
  type: actions.SIGNIN_ERRORS,
  payload,
});
