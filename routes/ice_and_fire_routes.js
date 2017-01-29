var router = require('express').Router();
var asoiaf = require('../app_modules/ice_and_fire/ice_and_fire');

/* GET render comic page. */
router.get('/', function(req, res, next) {
  res.render('ice_and_fire');
});

router.get('/character', function(req, res){
  asoiaf.characters(req.query)
    .then(function(results){
      res.json(results);
    })
    .catch(function(error){
      res.status(500)
        .json({
          error: error
        });
    });
});

router.get('/houses', function(req, res){
  asoiaf.houses(req.query)
    .then(function(results){
      res.json(results);
    })
    .catch(function(error){
      res.status(500)
        .json({
          error: error
        });
    });
});

router.get('/books', function(req, res){
  asoiaf.books(req.query)
    .then(function(results){
      res.json(results);
    })
    .catch(function(error){
      res.status(500)
        .json({
          error: error
        });
    });
});

router.get('/fun', function(req, res){
  asoiaf.fun(req.query)
    .then(function(results){
      res.json(results);
    })
    .catch(function(error){
      res.status(500)
        .json({
          error: error
        });
    });
});

module.exports = router;
