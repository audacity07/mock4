import {
  DELETE_FORUM_SUCCESS,
  FORUM_FAILURE,
  FORUM_REQUEST,
  GET_FORUM_SUCCESS,
  PATCH_FORUM_SUCCESS,
  POST_FORUM_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export function postQuestion(paramObj) {
  return async function (dispatch) {
    dispatch({ type: FORUM_REQUEST });
    try {
      await axios.post(
        `https://mock2-masai-revision.onrender.com/forum`,
        paramObj
      );
      dispatch({ type: POST_FORUM_SUCCESS, payload: paramObj });
    } catch (error) {
      console.log(error);
      dispatch({ type: FORUM_FAILURE });
    }
  };
}

export function getQuestion() {
  return async function (dispatch) {
    dispatch({ type: FORUM_REQUEST });
    try {
      let res = await axios(`https://mock2-masai-revision.onrender.com/forum`);
      // console.log("getQuestion", res.data);
      dispatch({ type: GET_FORUM_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FORUM_FAILURE });
    }
  };
}

export function patchQuestion(id, paramObj) {
  return async function (dispatch) {
    dispatch({ type: FORUM_REQUEST });
    try {
      await axios.patch(
        `https://mock2-masai-revision.onrender.com/forum/${id}`,
        paramObj
      );
      // console.log("patchQuestion", res.data);
    } catch (error) {
      console.log(error);
      dispatch({ type: FORUM_FAILURE });
    }
  };
}

export function deleteQuestion(id) {
  return async function (dispatch) {
    dispatch({ type: FORUM_REQUEST });
    try {
      let res = await axios.delete(
        `https://mock2-masai-revision.onrender.com/forum/${id}`
      );
      dispatch({ type: DELETE_FORUM_SUCCESS, payload: id });
    } catch (error) {
      console.log(error);
      dispatch({ type: FORUM_FAILURE });
    }
  };
}
