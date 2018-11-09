import axios from 'axios';

axios.defaults.baseURL = api.BASE_URL;
const token = ''

if (token) {
  axios.defaults.headers.common['Authorization'] = 'token ' + token;
}

export default axios;