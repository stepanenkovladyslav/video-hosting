const APIError = require("../error/ApiError");
const { Video } = require("../model/models");

const findVideosMiddleware = async (req, res, next) => {
	try {
		const userId = +req.params.id;
		if (isNaN(userId)) {
			next(APIError.badRequest("Bad Request"));
		}
		const videos = await Video.findAll({
			where: { UserId: userId },
			raw: true,
		});
		req.videos = videos;
		next();
	} catch (e) {
		next(e);
	}
};

module.exports = findVideosMiddleware;
