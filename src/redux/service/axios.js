import axios from 'axios';
import api from '../api';

axios.defaults.baseURL = api.BASE_URL;
const token = '7c23d0919b13e2b375a4127605c7bcb25a5e30b2'

if (token) {
  axios.defaults.headers.common['Authorization'] = 'token ' + token;
  // axios.defaults.headers.common['Content-Type: '] = '';
}

export default axios;