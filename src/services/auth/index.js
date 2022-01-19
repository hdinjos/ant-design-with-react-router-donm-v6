import { httpPrivate } from "../config";

const login = request => httpPrivate.post("/login", request);
const register = request => httpPrivate.post("/register", request);

export {
  login, register
}