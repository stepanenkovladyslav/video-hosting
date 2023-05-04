const Router = require("express");
const express = require("express");
const VideoController = require("../controllers/videoController");
const path = require("path");
const findUsersMiddleware = require("../middlewares/findUsersMiddleware");
const { Video } = require("../model/models");

const videoRouter = new Router();
videoRouter.get("/", findUsersMiddleware, VideoController.getAll);
videoRouter.get("/video/:id", VideoController.vidPage);
videoRouter.get("/api/video/:id", VideoController.getOne);

module.exports = videoRouter;
