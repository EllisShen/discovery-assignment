import axios from 'axios';

const base = '/api';

function fetchCategory() {
  return axios.get(`${base}/categories`).then(res => res.data);
}

const api = {
  fetchCategory,
};

export default api;
