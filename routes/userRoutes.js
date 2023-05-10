const Router = require("express");
const express = require("express");
const User = require("../controllers/userController");
const UserController = require("../controllers/userController");
const findVideosMiddleware = require("../middlewares/findVideosMiddleware");
const checkRegisterMiddleware = require("../middlewares/checkRegisterMiddelware.js");
const checkLoginMiddleware = require("../middlewares/checkLoginMiddleware.js");
const checkTokenMiddleware = require("../middlewares/checkTokenMiddleware.js");

const jsonParser = express.json();
const userRouter = new Router();
userRouter.use(jsonParser);
userRouter.use(express.urlencoded({ extended: true }));
userRouter.post(
	"/api/register",
	checkRegisterMiddleware,
	UserController.register
);
userRouter.get("/create-account", UserController.registerPage);
userRouter.post("/api/login", checkLoginMiddleware, UserController.login);
userRouter.get("/login", UserController.loginPage);
userRouter.get("/api/auth", checkTokenMiddleware, UserController.updateToken);
userRouter.get("/:id", findVideosMiddleware, UserController.userPage);

module.exports = userRouter;
