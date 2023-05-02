const Router = require("express");
const express = require("express");
const User = require("../controllers/userController");
const UserController = require("../controllers/userController");

const jsonParser = express.json();
const userRouter = new Router();

userRouter.post("/register", jsonParser, UserController.register);

module.exports = userRouter;
