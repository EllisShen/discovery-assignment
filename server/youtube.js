const config = require('./config');
const axios = require('axios');

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3';
const MAX_RESULT = 10;

// fetch category list
function getCategory() {
  return axios.get(`${YOUTUBE_API}/videoCategories?` +
    `part=snippet&` +
    `regionCode=US&` +
    `key=${config.API_KEY}`)
}

// fetch popular videos
function getPopularVideos(pageToken, categoryId) {
  console.log('categoryId', categoryId);
  return axios.get(`${YOUTUBE_API}/videos?` +
    `pageToken=${pageToken}&` +
    `maxResults=${MAX_RESULT}&` +
    `part=snippet%2CcontentDetails&` +
    `chart=mostPopular&` +
    `regionCode=US&` +
    `videoCategoryId=${categoryId}&` +
    `key=${config.API_KEY}`);
}

const YoutubeApi = {
  getCategory,
  getPopularVideos,
};

module.exports = YoutubeApi;
