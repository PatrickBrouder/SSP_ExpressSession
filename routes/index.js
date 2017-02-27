var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Joke session' });
});
router.post('/jokes', function(req, res) {
  req.session.jokeMsg = req.body.joke;
  res.render('jokes',{msg: req.session.testMessage});
});
router.get('/jokes', function(req, res, next) {
  if (!req.session.hasOwnProperty('jokeMsg')) {
    req.session.jokeMsg = "new";
  } 
  res.render('jokes',{msg: req.session.testMessage});
});

module.exports = router;
