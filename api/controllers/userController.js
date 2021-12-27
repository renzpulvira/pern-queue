require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { checkUserExists } = require("../utils/helpers/db.helpers");
const { generateAccessToken } = require("../utils/helpers/jwt.helpers");

// TODO: Follow Appropriate JWT Token Auth
/* 
1. Auth Token
*/

const auth_token = (req, res, next) => {
  console.log(`$headers -> ${req.headers["authorization"]}`);
  const token = req.body.clientToken;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, token) => {
    if (err) return res.sendStatus(403);
    req.token = token;

    next();
  });
};

const request_users = async (req, res, next) => {
  console.dir(req.token);
  try {
    const allUsers = await User.findAll();
    return res.status(200).send({ allUsers });
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
};

const create_user = async (req, res) => {
  let { name, password, role } = await req.body;

  try {
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

      console.log(`- create_user->if(userExists)->${token}`);

      console.log({ createdUser, token });

      return res.json({
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
};

const check_user = async (req, res) => {
  let { name, password } = await req.body;

  try {
    const user = await User.findOne({ where: { name } });

    // exit if no username found
    if (!user)
      return res
        .status(200)
        .send({ msg: "Incorrect Username/Password.", success: false });

    bcrypt.compare(password, user.password, async function (err, bres) {
      if (err) return res.send(err);

      if (!bres) {
        return res
          .status(200)
          .send({ msg: "Incorrect Username/Password.", success: false });
      } else {
        const token = generateAccessToken(
          name,
          process.env.ACCESS_TOKEN_SECRET
        );

        return res.status(200).send({
          msg: null,
          success: true,
          accessToken: token,
        });
      }
    });
  } catch (err) {
    if (err) return err;
  }
};

const get_token = async (req, res) => {
  try {
    const token = await generateAccessToken(
      "renzpulvira",
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.status(200).json(token);
  } catch (err) {
    if (err) return res.status(400).json(err);
  }
};

module.exports = {
  request_users,
  create_user,
  check_user,
  auth_token,
  get_token,
};
