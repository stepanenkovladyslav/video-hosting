const multer = require("multer");

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
module.exports = multerMiddleware;
