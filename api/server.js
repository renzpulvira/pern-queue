require("dotenv").config();
const express = require("express");
// const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 1337;

// SocketIO
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Sequelize
const { sequelize } = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

const queueRoutes = require("./routes/queues.routes");
const roomRoutes = require("./routes/rooms.routes");
const testRoutes = require("./routes/test.routes");
const searchRoutes = require("./routes/search.routes");

app.get("/api/", (req, res) => {
  res.status(200).send({ message: "Lorem ipsum dolor sit amet." });
});

app.use("/api/search/", searchRoutes);

app.use("/api/queues", queueRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/test/", testRoutes);

http.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`- API Server Running @ 1337`);
  console.log(`- Database Connected`);
});
