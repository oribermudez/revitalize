import { TOGGLE_SIDEBAR } from "../actions";

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      console.log("state", state);
      return {
        ...state,
        isSidebarOpen: !isSidebarOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
