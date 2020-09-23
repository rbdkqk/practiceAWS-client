import { handleActions } from "redux-actions";

import axios from "axios";

const POST_SIGNUP_PENDING = "POST_SIGNUP_PENDING";
const POST_SIGNUP_SUCCESS = "POST_SIGNUP_SUCCESS";
const POST_SIGNUP_FAILURE = "POST_SIGNUP_FAILUER";

axios.defaults.withCredentials = true; // ??

function postSignupAPI(data) {
  // axios.defaults.withCredentials = false; // 이렇게 해야 해결 가능
  return axios.post("http://3.20.232.121:13306/user/signup", data);
}

const initialState = {
  pending: false,
  error: false,
  isSignup: false,
  // isLogin: localStorage.getItem("isLogin") === "true",
};

export const signup = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: POST_SIGNUP_PENDING });

  return postSignupAPI(data)
    .then((result) => {
      dispatch({
        type: POST_SIGNUP_SUCCESS,
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_SIGNUP_FAILURE,
        payload: error,
      });
    });
};

export default handleActions(
  {
    [POST_SIGNUP_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
        isSignup: false,
      };
    },
    [POST_SIGNUP_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload,
        isSignup: true,
      };
    },
    [POST_SIGNUP_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
        isSignup: false,
      };
    },
  },
  initialState
);
