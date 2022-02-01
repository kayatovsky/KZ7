var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about', {
    customstyle: '<link rel="stylesheet" href="/stylesheets/about.css">'
  });
});

module.exports = router;
