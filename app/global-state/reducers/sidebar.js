import { TOGGLE_SIDEBAR } from "../actions";

const sidebarReducer = (state, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        test: !state.isSidebarOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
