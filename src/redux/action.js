import { GET_USERS, SEND_USER } from "./actionType";
import axios from "axios";

const url = "http://localhost:3004/users";

export const getUser = (users) => {
  return {
    type: GET_USERS,
    payLoad: users,
  };
};

export const postUser = () => {
  return {
    type: SEND_USER,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(getUser(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const sendUser = (state) => {
  return async (dispatch) => {
    axios
      .post(`${url}`, state)
      .then((response) => {
        dispatch(postUser());
        dispatch(getUser(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
