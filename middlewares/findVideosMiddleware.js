const { Video } = require("../model/models");

const findVideosMiddleware = async (req, res, next) => {
	const userId = req.params.id;
	const videos = await Video.findAll({
		where: { UserId: userId },
		raw: true,
	});
	req.videos = videos;
	next();
};

module.exports = findVideosMiddleware;
