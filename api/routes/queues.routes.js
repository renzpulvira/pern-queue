const express = require("express");
const router = express.Router();
const { Queues } = require("../models");

router.get("/", async (req, res) => {
  try {
    const queues = await Queues.findAll();

    return res.status(200).json(queues);
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
});

router.post("/create", async (req, res) => {
  let { yt_url, title, queued_by } = await req.body;

  try {
    const createdQueue = await Queues.create({ yt_url, title, queued_by });
    return res.status(200).send(createdQueue);
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
});

module.exports = router;
