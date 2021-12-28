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

      // Access Token
      const token = await generateAccessToken(
        name,
        process.env.ACCESS_TOKEN_SECRET
      );

      // Refresh Token
      const refreshToken = await generateAccessToken(
        name,
        process.env.REFRESH_TOKEN_SECRET
      );

      const createdUser = await User.create({
        name,
        password: hashed,
        role,
        refreshToken,
      });

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

const check_exists = async (req, res) => {
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
        const refreshToken = await jwt.sign(
          { name },
          process.env.REFRESH_TOKEN_SECRET
        );

        const updatedUserToken = User.update(
          { refreshToken },
          { where: { name: name } }
        );

        return res.status(200).send({
          msg: null,
          success: true,
          accessToken: token,
          sequelize: updatedUserToken,
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

const get_current_user = async (req, res) => {
  const { clientToken } = await req.body;
  try {
    jwt.verify(
      clientToken,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, token) => {
        if (err) return res.sendStatus(403);
        res.json({ name: token.name });
      }
    );
  } catch (err) {
    if (err) res.sendStatus(404);
  }
};

module.exports = {
  request_users,
  create_user,
  check_exists,
  auth_token,
  get_token,
  get_current_user,
};
