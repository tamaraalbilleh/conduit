import { ActionObjects } from "./types";
import { ItemObject } from "./types";
import actions from "./types";

let initialState = {
  user: {
    registrationError: [],
    loginErrors: [],
    info: {},
  },
};

const authReducer = (state = initialState, action: ActionObjects) => {
  let { type, payload } = action;

  switch (type) {
    case actions.ADD_USER : 
      return ({info : payload })
    case actions.SIGNUP_ERRORS:
      return { registrationError: payload };
    case actions.SIGNIN_ERRORS:
      return { loginErrors: payload };
    default:
      return state;
  }
};

export default authReducer;
