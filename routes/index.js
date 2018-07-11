var express = require('express');
var router = express.Router();

//HOME PAGE


router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME PAGE' });
});

module.exports = router;
