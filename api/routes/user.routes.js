const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/create", async (req, res) => {
  const { name, email, password, role } = await req.body;

  try {
    const createdUser = await User.create({ name, email, password, role });
    return res.status(200).send(createdUser);
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send({ error: err });
    }
  }
});

module.exports = router;
