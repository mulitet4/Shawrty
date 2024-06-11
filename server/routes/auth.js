var express = require('express');
var router = new express.Router();

const jwt = require('jsonwebtoken');
require('dotenv').config();

const expiry = '1h';
// TODO Figure out how to store refresh tokens in database and implement prisma
let refreshTokens = [];

router.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { user: user.name },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: expiry }
    );
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  });

  res.json({ accessToken: accessToken });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expiry,
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

router.delete('/logout', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(404);

  refreshTokens = refreshTokens.filter((token) => token != refreshToken);

  res.sendStatus(204);
});

module.exports = router;
