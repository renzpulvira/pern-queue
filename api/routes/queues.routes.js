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
  // let { queue_order, video_id, channel_id, title, queued_by } = await req.body;
  let { video_id, channel_id, title, queued_by, room_id } = await req.body;

  try {
    let currentQueus = await Queues.findAll();

    const createdQueue = await Queues.create({
      // queue_order: currentQueus.length === 0 ? 0 : currentQueus.length,
      video_id,
      channel_id,
      title,
      queued_by,
      room_id,
    });

    return res.status(200).send(createdQueue);
  } catch (err) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }
});

module.exports = router;
