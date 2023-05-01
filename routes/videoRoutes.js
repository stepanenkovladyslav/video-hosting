const Router = require("express");
const Video = require("../controllers/videoController");

const videoRouter = new Router();

videoRouter.use("/", Video);

module.exports = videoRouter;
