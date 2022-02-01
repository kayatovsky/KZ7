var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('projects', {
        customstyle: "<link rel='stylesheet' href='/stylesheets/projects.css'/>"
    });
});

module.exports = router;
