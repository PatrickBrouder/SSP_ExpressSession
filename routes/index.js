var express = require('express');
var router = express.Router();

var myJokes = req.session.titles || [];

router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Joke session' });
});
router.post('/jokes', function(req, res) {
  req.session.jokeMsg = req.body.joke;
  myJokes.push(req.session.jokeMsg);
  res.render('jokes',{ jokeList: myJokes });
});
router.get('/jokes', function(req, res, next) {
  
  res.render('jokes',{ jokeList: myJokes });
});

module.exports = router;
