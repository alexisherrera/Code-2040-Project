var express = require('express');
var data = require('../data/data')
var router = express.Router();

//FEED

//feed for neighborhood
router.get('/neighborhood', function(req, res, next) {

	neighborhoodData = data.DataObj.collections.neighborhood.posts

  res.render('feed', { title: 'FEED NEIGHBORHOOD', data: neighborhoodData });
});

//feed for country
router.get('/country', function(req, res, next) {

	countryData = data.DataObj.collections.country.posts
  res.render('feed', { title: 'FEED COUNTRY', data: countryData });
});

//feed for world
router.get('/world', function(req, res, next) {

	worldData = data.DataObj.collections.world.posts
  res.render('feed', { title: 'FEED WORLD', data: worldData });
});

module.exports = router;