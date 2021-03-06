import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGIN_RESUME } from "store/type/auth";

const initialState = {
  isLoggedIn: false,
  userData: {},
  isLoading: false,
  error: ""
}

const authReducer = (state = initialState, store) => {
  switch (store.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, isLoading: true, userData: {}, error: "" };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoading: false, userData: store.data, isLoggedIn: true };
    case AUTH_LOGIN_FAIL:
      return { ...state, isLoading: false, isLoggedIn: false, userData: {}, error: store.error };
    case AUTH_LOGIN_RESUME:
      return { ...state, userData: store.data, isLoggedIn: true }
    default:
      return state;
  }
};

export default authReducer;