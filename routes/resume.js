var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.sendFile(path.join('/Users/wmatera/Desktop/express-start/public/resume.html'))

});

module.exports = router;
