var express = require('express');
var router = express.Router();

//ARTICLES

//route for article given the articleID
router.get('/:articleID', function(req, res, next) {
  res.render('index', { title: 'ARTICLE' + " " + req.params.articleID });
});

//route for actions of an article
router.get('/:articleID/actions', function(req, res, next) {


  res.render('index', { title: 'ARTICLE' + " " + req.params.articleID + "ACTIONS" });
});

module.exports = router;