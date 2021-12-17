require("dotenv").config();
const express = require("express");
// const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 4000;
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

// SocketIO
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Youtube
const search = require("youtube-search");

// Sequelize
const { sequelize } = require("./models");

// Routes
const userRoutes = require("./routes/user.routes");
const queueRoutes = require("./routes/queues.routes");
const roomRoutes = require("./routes/rooms.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/", (req, res) => {
  res.status(200).send({ message: "Lorem ipsum dolor sit amet." });
});

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
app.use("/api/rooms", roomRoutes);

http.listen(PORT, async () => {
  console.log(`[SERVER][LISTEN]::4000`);
  await sequelize.authenticate();
  console.log("DB Connected!");
});
