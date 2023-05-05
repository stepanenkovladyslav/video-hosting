const Router = require("express");
const CommentController = require("../controllers/commentController");
const express = require("express");

const commentRouter = new Router();
commentRouter.use(express.urlencoded({ extended: true }));
commentRouter.post("/api/create-comment", CommentController.create);

module.exports = commentRouter;
