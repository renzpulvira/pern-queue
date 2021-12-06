require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

// Youtube
const search = require("youtube-search");

// Sequelize
const { sequelize } = require("./models");

// Routes
const userRoutes = require("./routes/user.routes");
const queueRoutes = require("./routes/queues.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/search", async (req, res) => {
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

app.use("/api/user", userRoutes);
app.use("/api/queues", queueRoutes);

app.listen(PORT, async () => {
  console.log(`[SERVER][LISTEN]::4000`);
  await sequelize.authenticate();
  console.log("DB Connected!");
});
