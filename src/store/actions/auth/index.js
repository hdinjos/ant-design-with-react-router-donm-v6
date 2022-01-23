import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGIN_RESUME } from "store/type/auth";
import { login } from "services/auth";
import jwtParse from "utils/jwtParse";
import sStorage from "utils/sStorage";



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
    sStorage.set("xToken", response.data.accessToken);
    sStorage.set("yToken", response.data.refreshToken);
    sStorage.set("nData", userData(response.data.accessToken))
    dispatch({ type: AUTH_LOGIN_SUCCESS, data: userData(response.data.accessToken) });
  } catch (err) {
    dispatch({ type: AUTH_LOGIN_FAIL, error: err });
  }
};

export const reLogin = () => (dispatch) => {
  try {
    const token = sStorage.get("xToken");
    if (token) {
      dispatch({ type: AUTH_LOGIN_RESUME, data: userData(token) });
    }
  } catch (err) {
    if (err instanceof TypeError && err.message === "deCompressedData is null") {
      dispatch({ type: AUTH_LOGIN_FAIL, error: err })
    }
  }
};