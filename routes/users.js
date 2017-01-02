var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {
//   console.log("Got a GET request for /ab*cd");
//   res.send('Page Pattern Match');
// })


module.exports = router;
