const Router = require("express");
const express = require("express");
const VideoController = require("../controllers/videoController");
const path = require("path");
const findUsersMiddleware = require("../middlewares/findUsersMiddleware");
const { Video } = require("../model/models");
const findCommentsMiddleware = require("../middlewares/findCommentsMiddleware");
const multer = require("multer");

const videoRouter = new Router();

const formParser = express.urlencoded({ extended: true });

//Multer for uploads
const storageConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./videos");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "video/mp4" || file.mimetype === "video/quicktime") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
const multerMiddleware = multer({
	storage: storageConfig,
	fileFilter: fileFilter,
});
//

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
