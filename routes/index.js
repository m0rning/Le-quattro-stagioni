var express = require('express');
var router = express.Router();
var mock = require('../mock');


router.get('/', function(req, res, next) {
mock.getData();
  res.json({success: true});
});

module.exports = router;
