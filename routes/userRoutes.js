const Router = require("express");
const express = require("express");
const User = require("../controllers/userController");
const UserController = require("../controllers/userController");

const jsonParser = express.json();
const userRouter = new Router();
userRouter.use(jsonParser);

userRouter.post("/register", UserController.register);
userRouter.get("/create-account", UserController.registerPage);
userRouter.post("/login", UserController.login);
userRouter.get("/auth", UserController.updateToken);

module.exports = userRouter;
