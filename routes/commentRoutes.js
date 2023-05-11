const Router = require("express");
const CommentController = require("../controllers/commentController");
const express = require("express");
const checkCommentMiddleware = require("../middlewares/checkCommentMiddleware.js");

const commentRouter = new Router();
const jsonParser = express.json();
commentRouter.use(express.urlencoded({ extended: true }));
commentRouter.post(
	"/api/create-comment",
	jsonParser,
	checkCommentMiddleware,
	CommentController.create
);

module.exports = commentRouter;
