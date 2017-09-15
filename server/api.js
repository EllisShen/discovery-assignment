const express = require('express');
const config = require('./config');
const youtube = require('./youtube');


const router = express.Router();

/**
 * GET: /categories
 * Fetch Categories from youtube
 */
router.get('/categories', (req, res) => {
  // fetch categories from youtube
  youtube.getCategory()
    .then((raw) => {
      res.send(raw.data.items);
    })
    .catch((err) => {
      console.log('err', err);
      res.sendStatus(400);
    })
});

/**
 * GET: /videolist?pageSize=10&page=1
 * Fetch videolist from youtube (pagination is optional)
 */
router.get('/videolist', (req, res) => {
  let pageToken = '';
  let categoryId = '';
  if (req.query.pageToken) {
    pageToken = req.query.pageToken;
  }
  if (req.query.categoryId) {
    categoryId = req.query.categoryId;
  }
  // find videos from youtube
  youtube.getPopularVideos(pageToken, categoryId)
  .then((raw) => {
    res.send(raw.data);
  })
  .catch((err) => {
    console.log('err', err);
    res.sendStatus(400);
  })
});


/**
 * GET: /healthCheck
 * Basic server health check
 */
router.get('/healthCheck', (req, res) => {
  res.send('OK');
});

/**
 * authenticate(): Check if logged in and has the right permission
 * return user Identity
 */
function authenticate(req) {
  // console.log('Signed Cookies: ', req.signedCookies);
  return new Promise((resolve, reject) => {
    // demo: always return resolve
    resolve();
    // if (cookies.xxxxxxx) {
    //
    // } else {
    //   reject({ msg: 'please login' })
    // }
  });
}

module.exports = router;
