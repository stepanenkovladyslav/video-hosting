const Router = require("express");
const express = require("express");
const VideoController = require("../controllers/videoController");
const path = require("path");
const findUsersMiddleware = require("../middlewares/findUsersMiddleware");
const { Video } = require("../model/models");
const findCommentsMiddleware = require("../middlewares/findCommentsMiddleware");
const multerMiddleware = require("../middlewares/multerMiddleware");

const videoRouter = new Router();

const formParser = express.urlencoded({ extended: true });

videoRouter.get("/", findUsersMiddleware, VideoController.getAll);

videoRouter.get(
	"/video/:id",
	findUsersMiddleware,
	findCommentsMiddleware,
	VideoController.vidPage
);

videoRouter.get("/api/video/:id", VideoController.getOne);

videoRouter.get("/upload", VideoController.uploadPage);

videoRouter.post(
	"/api/upload",
	formParser,
	multerMiddleware.single("filedata"),
	VideoController.uploadVideo
);

module.exports = videoRouter;
