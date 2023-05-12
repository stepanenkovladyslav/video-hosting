const ApiError = require("../error/ApiError");
const checkCommentMiddleware = (req, res, next) => {
	const { comment } = req.body;
	if (!comment) {
		throw ApiError.badRequest("Empty comment");
	}

	if (typeof comment != "string") {
		throw ApiError.badRequest("Bad Request");
	}
	return next();
};

module.exports = checkCommentMiddleware;
