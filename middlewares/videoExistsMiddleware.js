const APIError = require("../error/ApiError");
const { Video } = require("../model/models");
const videoExistsMiddleware = async (req, res, next) => {
	try {
		const videoId = +req.params.id;
		if (isNaN(videoId)) {
			next(APIError.badRequest("Bad Request"));
		}
		const video = await Video.findOne({
			where: { id: videoId },
			raw: true,
		});
		if (!video) {
			next(APIError.badRequest("Bad Request"));
		}
		req.video = video;
		return next();
	} catch (e) {
		next(e);
	}
};

module.exports = videoExistsMiddleware;
