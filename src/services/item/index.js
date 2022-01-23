import { httpPrivate } from "../config";

const index = () => httpPrivate.get(`/items`);
const show = (id) => httpPrivate.get(`/item/${id}`);
const create = (request) => httpPrivate.post(`/item`, request);
const update = (request) => httpPrivate.put(`/item/${request.id}`, request.data);
const destroy = (id) => httpPrivate.delete(`/item/${id}`);

export { index, show, create, update, destroy };