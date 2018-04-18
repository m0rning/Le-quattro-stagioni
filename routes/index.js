const express = require('express');
const router = express.Router();
const mock = require('../mock');


router.get('/', function(req, res, next) {
  const data = mock.getData();
  res.json({success: true, data});
});

module.exports = router;
