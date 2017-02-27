var express = require('express');
var router = express.Router();

req.session.myJokes = [];

router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Joke session' });
});
router.post('/jokes', function(req, res) {
  req.session.jokeMsg = req.body.joke;
  req.session.myJokes.push(req.session.jokeMsg);
  res.render('jokes',{ jokeList: req.session.myJokes });
});
router.get('/jokes', function(req, res, next) {
  
  res.render('jokes',{ jokeList: req.session.myJokes });
});

module.exports = router;
