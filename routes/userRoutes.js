const Router = require("express");
const User = require("../controllers/userController");

const userRouter = new Router();

userRouter.get("/", User);

module.exports = userRouter;
