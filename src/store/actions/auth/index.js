import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from "../../type/auth";
import { login } from "../../../services/auth";

export const reqLogin = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    const response = await login(request);
    console.log(response);
    dispatch({ type: AUTH_LOGIN_SUCCESS });
  } catch (err) {
    dispatch({ type: AUTH_LOGIN_FAIL });
  }
};