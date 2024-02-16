import { TOGGLE_SIDEBAR } from "../actions";

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default sidebarReducer;
