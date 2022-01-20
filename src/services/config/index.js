import axios from "axios";
import { baseURL } from "../../utils/constant";

const httpPublic = axios.create({
  baseURL,
});

const httpPrivate = axios.create({
  baseURL
});


httpPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    };
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await httpPrivate.post("/refreshToken", {
        refreshToken
      });
      localStorage.setItem("token", response.data.refreshToken);
      error.response.config.headers['Authorization'] = "Bearer " + response.data.accessToken;
      return axios(error.response.config);
    }
    return Promise.reject(error);
  }
)

export {
  httpPublic, httpPrivate
}