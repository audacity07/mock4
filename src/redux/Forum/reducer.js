import {
  DELETE_FORUM_SUCCESS,
  FORUM_FAILURE,
  FORUM_REQUEST,
  GET_FORUM_SUCCESS,
  POST_FORUM_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  forumData: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FORUM_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    case FORUM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_FORUM_SUCCESS: {
      // console.log("payload", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        forumData: payload,
      };
    }

    case POST_FORUM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        forumData: [...state, payload],
      };
    }

    case DELETE_FORUM_SUCCESS: {
      let new_arr = state.forumData.filter((item) => item.id !== payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        forumData: new_arr,
      };
    }

    default: {
      return state;
    }
  }
};
