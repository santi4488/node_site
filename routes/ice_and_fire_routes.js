var router = require('express').Router();
var character_functions = require('../app_modules/comic_characters/comic_characters');

/* GET render comic page. */
router.get('/', function(req, res, next) {
  res.render('ice_and_fire');
});

module.exports = router;
