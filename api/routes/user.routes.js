require("dotenv").config();
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { checkUserExists } = require("../utils/helpers/db.helpers");
const { generateAccessToken } = require("../utils/helpers/jwt.helpers");

const authToken = async (req, res, next) => {
  const token = await req.cookies["access-token"];

  console.log(token);

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    if (err) return res.sendStatus(403);
    console.log({ token });

    req.token = token;

    next();
  });
};

router.get("/", authToken, async (req, res) => {
  try {
    console.log(req.token);
    const allUsers = await User.findAll();
    return res.status(200).send({ allUsers });
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
});
// New Content
const hashPass = (pass) => {
  bcrypt.hash(pass, 10, function (err, hash) {
    return hash;
  });
};

router.post("/token", async (req, res) => {
  try {
    const token = await generateAccessToken(
      "renzpulvira",
      process.env.ACCESS_TOKEN_SECRET
    );

    res.cookie("access-token", token, {
      maxAge: 15000,
    });

    console.log(token);
    return res.status(200).json(token);
  } catch (err) {
    if (err) return res.status(400).json(err);
  }
});

router.post("/create", async (req, res) => {
  let { name, password, role } = await req.body;

  try {
    // TODO: Refactor Code
    const isUserExists = await checkUserExists(User, name);
    if (isUserExists) {
      return res
        .status(200)
        .send({ message: "User Already Exists", success: false });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const createdUser = await User.create({ name, password: hashed, role });
      const token = await generateAccessToken(
        name,
        process.env.ACCESS_TOKEN_SECRET
      );

      // console.log({ createdUser, token });
      console.log({ token });

      return res.status(200).send({
        message: "New User",
        success: true,
        token: token,
        user: req.user,
      });
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send({ error: err });
    }
  }
});

router.post("/check", async (req, res) => {
  let { name, password } = await req.body;

  try {
    const user = await User.findOne({ where: { name } });

    // exit if no username found
    if (!user)
      return res
        .status(200)
        .send({ msg: "Username not found", success: false });

    bcrypt.compare(password, user.password, function (err, bres) {
      if (err) return res.send(err);

      if (!bres) {
        return res
          .status(200)
          .send({ msg: "Incorrect Password", success: false });
      } else {
        return res
          .status(200)
          .send({ msg: "Correct Password!", success: true });
      }
    });
  } catch (err) {
    if (err) return err;
  }
});

module.exports = router;
