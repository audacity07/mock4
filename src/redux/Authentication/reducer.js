import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: false,
  username: "",
  avatar: "",
  email: "",
  password: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    case ACCOUNT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGIN_SUCCESS: {
      // console.log(payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        username: payload.username,
        avatar: payload.avatar,
        email: payload.email,
        password: payload.password,
      };
    }

    default: {
      return state;
    }
  }
};
