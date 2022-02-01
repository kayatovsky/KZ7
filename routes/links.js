var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('links', {
        customstyle: "<link rel='stylesheet' href='/stylesheets/links.css'/>"
    });
});

module.exports = router;
