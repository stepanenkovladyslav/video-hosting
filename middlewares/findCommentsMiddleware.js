const { Comment } = require("../model/models");
const findCommentsMiddleware = async (req, res, next) => {
	const id = +req.params.id;
	const comments = await Comment.findAll({
		where: { VideoId: id },
		raw: true,
	});
	req.comments = comments;
	next();
};

module.exports = findCommentsMiddleware;
