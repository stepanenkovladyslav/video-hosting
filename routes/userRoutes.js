const Router = require("express");
const express = require("express");
const User = require("../controllers/userController");
const UserController = require("../controllers/userController");

const jsonParser = express.json();
const userRouter = new Router();
userRouter.use(jsonParser);
userRouter.use(express.urlencoded({ extended: true }));
userRouter.post("/api/register", UserController.register);
userRouter.get("/create-account", UserController.registerPage);
userRouter.post("/api/login", UserController.login);
userRouter.get("/login", UserController.loginPage);
userRouter.get("/api/auth", UserController.updateToken);

module.exports = userRouter;
