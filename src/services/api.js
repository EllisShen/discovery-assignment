import axios from 'axios';

const base = '/api';

function fetchCategory() {
  return axios.get(`${base}/categories`).then(res => res.data);
}

function fetchVideoList(payload) {
  console.log('payload', payload)
  return axios.get(`${base}/videolist?pageToken=${payload.pageToken}&categoryId=${payload.categoryId}`).then(res => res.data);
}

const api = {
  fetchCategory,
  fetchVideoList,
};

export default api;
