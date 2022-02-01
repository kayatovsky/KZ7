var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        customstyle: "<link rel='stylesheet' href='/stylesheets/style.css'/>"
    });
});

module.exports = router;
