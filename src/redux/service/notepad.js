import axios from './axios';

function create(data) {
  return axios.post(api, data)
}

function read(id) {
  return axios.get(`${api.ITEMS}/${id}`);
}

function update(id, data) {
  return axios.patch(`${api}/${id}`, data)
}

function remove(id) {
  return axios.delete(`${api.ITEMS}/${id}`)
}

export default {
  create,
  read,
  update,
  remove
}