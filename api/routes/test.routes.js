require("dotenv").config();

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const users = [
  {
    name: "renz",
  },
  {
    name: "janice",
  },
];

function auth_token(req, res, next) {
  const bearerHeader = req.headers["x-access-token"];
  console.log(req.headers);
  if (typeof bearer !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    console.log(bearerToken);
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

router.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

router.get("/token", (req, res) => {
  const token = jwt.sign({ name: "renz" }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  });

  res.json({ status: "ok", accessToken: token });
});

router.get("/users", auth_token, async (req, res) => {
  const token = await req.token;
  if (token) {
    console.log(`$/users/ -> ${token}`);
    res.json({ status: "ok", isVerified: "yes" });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
