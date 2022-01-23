import axios from "axios";
import { baseURL } from "../../utils/constant";
import sStorage from "../../utils/sStorage";

const httpPublic = axios.create({
  baseURL,
});

const httpPrivate = axios.create({
  baseURL
});


httpPrivate.interceptors.request.use(
  (config) => {
    const token = sStorage.get("xToken");
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
      const refreshToken = sStorage.get("yToken");
      const response = await httpPrivate.post("/refreshToken", {
        refreshToken
      });
      sStorage.set("yToken", response.data.refreshToken);
      error.response.config.headers['Authorization'] = "Bearer " + response.data.accessToken;
      return axios(error.response.config);
    }
    return Promise.reject(error);
  }
)

export {
  httpPublic, httpPrivate
}