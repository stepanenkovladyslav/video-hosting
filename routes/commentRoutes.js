const Router = require("express");
const CommentController = require("../controllers/commentController");
const express = require("express");
const checkCommentMiddleware = require("../middlewares/checkCommentMiddleware.js");

const commentRouter = new Router();
commentRouter.use(express.urlencoded({ extended: true }));
commentRouter.post(
	"/api/create-comment",
	checkCommentMiddleware,
	CommentController.create
);

module.exports = commentRouter;
