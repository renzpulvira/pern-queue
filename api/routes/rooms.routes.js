const express = require("express");
const router = express.Router();
const { Rooms } = require("../models");

router.get("/", async (req, res) => {
  try {
    let results = await Rooms.findAll();
    return res.status(200).json(results);
  } catch (err) {
    if (err) {
      console.log(err);
      return res.send(400).send({ error: err });
    }
  }
});

router.post("/create", async (req, res) => {
  try {
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }
});

module.exports = router;
