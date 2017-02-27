var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Joke session' });
});
router.post('/jokes', function(req, res) {
  var joke1=  req.body.joke
  req.session.jokeMsg = joke1;
  res.render('jokes',{msg: req.session.testMessage});
});
router.get('/jokes', function(req, res, next) {
  if (!req.session.hasOwnProperty('jokeMsg')) {
    req.session.jokeMsg = "new";
  } 
  res.render('jokes',{msg: req.session.testMessage});
});

module.exports = router;
