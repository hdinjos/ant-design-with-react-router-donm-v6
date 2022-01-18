import { httpPrivate } from "../config";

const login = request => httpPrivate.post("/login", request);

export {
  login
}