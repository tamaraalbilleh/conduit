import { ActionObjects } from "./types";
import actions from "./types";

let initialState = {
  tags: [],
};

const tagsReducer = (state = initialState, action: ActionObjects) => {
  let { type, payload } = action;

  switch (type) {
    case actions.GET_TAGS:
      return payload;
    default:
      return state;
  }
};

export default tagsReducer;
