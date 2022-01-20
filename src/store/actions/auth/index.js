import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from "../../type/auth";
import { login } from "../../../services/auth";
import jwtParse from "../../../utils/jwtParse";

const userData = (token) => {
  const { id, email, fullName } = jwtParse(token);
  return {
    id, email, fullName
  }
}

export const reqLogin = (request) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    const response = await login(request);
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch({ type: AUTH_LOGIN_SUCCESS, data: userData(response.data.accessToken) });
  } catch (err) {
    dispatch({ type: AUTH_LOGIN_FAIL, error: err });
  }
};