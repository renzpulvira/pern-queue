require("dotenv").config();
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.post("/", userControllers.auth_token, userControllers.request_users);
router.post("/token", userControllers.get_token);
router.post("/create", userControllers.create_user);
router.post("/check", userControllers.check_exists);
router.post("/requestuser", userControllers.get_current_user);

module.exports = router;
