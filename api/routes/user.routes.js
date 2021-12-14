const { formControlClasses } = require("@mui/material");
const express = require("express");
const router = express.Router();
const { User } = require("../models");
// const bcrypt = require("bcryptjs");

const checkUserExists = (model, name) => {
  return model.findOne({ where: { name } });
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

router.post("/create", async (req, res) => {
  let { name, role } = await req.body;

  try {
    let createdUser;
    // let isExisted = await User.findOne({ where: { name } });
    const isUserExists = await checkUserExists(User, name);
    if (isUserExists)
      return res
        .status(200)
        .send({ message: "User Already Exists", success: false });
    else createdUser = await User.create({ name, role });
    return res.status(200).send({ message: "New User", success: true });

    // return res.status(200).send({ message: "" });

    // createdUser = await User.create({ name, role });
    // return res.status(200).send(createdUser);
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
