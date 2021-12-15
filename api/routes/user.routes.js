const { formControlClasses } = require("@mui/material");
const express = require("express");
const router = express.Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

const checkUserExists = (model, name) => {
  return model.findOne({ where: { name } });
};

const generateAccessToken = (username) => {
  return jwt.sign({ name: username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  });
};

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
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

router.post("/create", async (req, res) => {
  let { name, password, role } = await req.body;

  try {
    // TODO: Refactor Code
    let createdUser;

    // let isExisted = await User.findOne({ where: { name } });
    const isUserExists = await checkUserExists(User, name);
    if (isUserExists) {
      return res
        .status(200)
        .send({ message: "User Already Exists", success: false });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      // return res.status(200).send({ name, hashed, role });

      createdUser = await User.create({ name, password: hashed, role });
      const token = await generateAccessToken(name);

      return res
        .status(200)
        .send({ message: "New User", success: true, token: token });
    }
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send({ error: err });
    }
  }
});

// router.post("/check", async (req, res) => {
//   let { name, password } = await req.body;

//   try {
//     const user = await User.findOne({ where: { name } });

//     // exit if no username found
//     if (!user) return res.status(400).send({ response: "Username not found" });

//     bcrypt.compare(password, user.password, function (err, bres) {
//       if (err) return res.send(err);

//       if (!bres) {
//         return res.status(400).send({ response: "Incorrect Password" });
//       } else {
//         return res.status(200).send({ response: "Correct Password!" });
//       }
//     });
//   } catch (err) {
//     if (err) return err;
//   }
// });

module.exports = router;
