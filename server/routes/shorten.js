var express = require('express');
var router = new express.Router();
const authMiddleware = require('../lib/helpers');

router.get('/urls', authMiddleware, (req, res) => {
  res.json({ message: 'Hello World!' });
});

module.exports = router;
