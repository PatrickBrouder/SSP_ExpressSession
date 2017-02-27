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
  var myjoke= req.session.jokeMsg;
  myJokes.push(myjoke);
  res.render('jokes',{ data: myJokes });
});
router.get('/jokes', function(req, res, next) {
  
  res.render('jokes',{ data: myJokes });
});

module.exports = router;
