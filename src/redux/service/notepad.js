import axios from './axios';
import api from '../api';

function create(data) {
  return axios.post(api.GISTS, data);
}

function read(id) {
  return axios.get(`${api.GISTS}/${id}`);
}

function update(id, data) {
  return axios.patch(`${api.GISTS}/${id}`, data)
}

function remove(id) {
  return axios.delete(`${api.GISTS}/${id}`)
}

export default {
  create,
  read,
  update,
  remove
}