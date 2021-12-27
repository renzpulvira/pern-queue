require("dotenv").config();
const express = require("express");
// const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 1337;
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
const userRoutes = require("./routes/user.routes");
const queueRoutes = require("./routes/queues.routes");
const roomRoutes = require("./routes/rooms.routes");
const testRoutes = require("./routes/test.routes");

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
app.use("/test/", testRoutes);

http.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`- Server Running @ 1337`);
  console.log("- Database Connected");
});
