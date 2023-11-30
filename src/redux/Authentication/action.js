import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";

export function registerUser(paramObj) {
  return async function (dispatch) {
    dispatch({ type: ACCOUNT_REQUEST });
    try {
      await axios.post(
        `https://mock2-masai-revision.onrender.com/users`,
        paramObj
      );
    } catch (error) {
      console.log(error);
      dispatch({ type: ACCOUNT_FAILURE });
    }
  };
}

export function loginUser(paramObj) {
  return async function (dispatch) {
    dispatch({ type: ACCOUNT_REQUEST });
    try {
      let res = await axios(`https://mock2-masai-revision.onrender.com/users`);
      // console.log(res.data);
      let valid = res.data.find((item) => item.email === paramObj.email);
      // console.log(valid);
      if (!valid) {
        alert("User does not exist, Please Register");
      } else if (
        valid.email !== paramObj.email ||
        valid.password !== paramObj.password
      ) {
        alert("Wrong Credentials");
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: valid });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: ACCOUNT_FAILURE });
    }
  };
}
