import {
  GET_FAILLED,
  GET_REQUEST,
  GET_SUCCESS,
} from "../Constants/UserConstants";

const initialTodos = {
  users: [],
  isLoading: false,
  error: null,
};

export const UserReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        users: action.paylod,
        isLoading: false,
        error: null,
      };
    case GET_FAILLED:
      return {
        users: [],
        isLoading: false,
        error: action.paylod,
      };

    default:
      return state;
  }
};
