var express = require('express');
var router = express.Router();

var myJokes = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Joke session' });
});
router.post('/jokes', function(req, res) {
  var joke1=  req.body.joke
  req.session.jokeMsg = joke1;
  myJokes.push(req.session.jokeMsg);
  res.render('jokes',myJokes);
});
router.get('/jokes', function(req, res, next) {
  
  res.render('jokes', myJokes);
});

module.exports = router;
