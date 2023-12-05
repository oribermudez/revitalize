import { ADD_USER, REMOVE_USER } from '../actions';

const usersReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case REMOVE_USER:
      const updatedUsers = state.users.filter((user) => user.id !== action.payload);
      return {
        ...state,
        users: updatedUsers,
      };

    default:
      return state;
  }
};

export default usersReducer;