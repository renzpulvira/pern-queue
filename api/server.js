require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

// Youtube
const search = require("youtube-search");

// Sequelize
const { sequelize } = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send({ huya: "huya" });
});

app.post("/api/user", async (req, res) => {
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

app.post("/api/search", async (req, res) => {
  let searchTerm = await req.body.term;

  try {
    search(
      searchTerm,
      { maxResults: 5, key: process.env.APIKEY },
      (err, results) => {
        if (err) return res.status(400).send("Error from NODE");

        res.status(200).send({ results: results });
      }
    );
  } catch (err) {
    if (err) return res.status(400).send("Something went wrong...");
  }
});

app.listen(PORT, async () => {
  console.log(`[SERVER][LISTEN]::4000`);
  await sequelize.authenticate();
  console.log("DB Connected!");
});
