import axios from "axios";
import { baseURL } from "../../utils/constant";

const httpPublic = axios.create({
  baseURL,
});

const httpPrivate = axios.create({
  baseURL
});

export {
  httpPublic, httpPrivate
}