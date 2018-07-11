var express = require('express');
var router = express.Router();

//FEED

//feed for neighborhood
router.get('/neighborhood', function(req, res, next) {
  res.render('index', { title: 'FEED NEIGHBORHOOD' });
});

//feed for country
router.get('/country', function(req, res, next) {
  res.render('index', { title: 'FEED COUNTRY' });
});

//feed for world
router.get('/world', function(req, res, next) {
  res.render('index', { title: 'FEED WORLD' });
});

module.exports = router;