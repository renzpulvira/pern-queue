require("dotenv").config();
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

// Youtube
const search = require("youtube-search");

router.post("/", userControllers.auth_token, async (req, res) => {
  let searchTerm = await req.body.term;

  try {
    search(
      searchTerm,
      { maxResults: 5, type: "video", key: process.env.APIKEY },
      (err, results) => {
        if (err) return res.status(400).send("Error from NODE");

        res.status(200).send({ results: results });
      }
    );
  } catch (err) {
    if (err) return res.status(400).send("Something went wrong...");
  }
});

module.exports = router;
