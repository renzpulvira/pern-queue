// TODO: Steps for JWT
/* 
ON REGISTER
1. Create New User
2. Create Refresh Token & Pass/Generate Access Token to cookie
3. On API Request, Check jwtToken Cookie if exists, Check User if logged in
  if does not exist:
    remove refresh token from user db
  if exists
    grant access to request api
 */
require("dotenv").config();
const express = require("express");
// const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 4000;
const userRoutes = require("./routes/user.routes");

// Sequelize
const { sequelize } = require("./models");

const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRoutes);

http.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`- Auth Server Running @ 4000`);
  console.log(`- Database Connected`);
});
