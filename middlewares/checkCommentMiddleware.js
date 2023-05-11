const ApiError = require("../error/ApiError");
const checkCommentMiddleware = (req, res, next) => {
	const { comment } = req.body;
	if (!comment) {
		throw ApiError.badRequest("No comment sent");
	}

	if (typeof comment != "string") {
		throw ApiError.badRequest("Bad Request");
	}
	return next();
};

module.exports = checkCommentMiddleware;
