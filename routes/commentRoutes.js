const Router = require("express");
const Comments = require("../controllers/commentController");

const commentRouter = new Router();

commentRouter.use("/", Comments);

module.exports = commentRouter;
