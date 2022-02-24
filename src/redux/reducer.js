import { GET_USERS, SEND_USER } from "./actionType";

const initialState = {
  user: {},
  users: [],
  loading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payLoad,
        loading: false,
      };
    }
    case SEND_USER: {
      return{
        ...state,
        loading: false
      }
    }
    default:
      return state;
  }
};
