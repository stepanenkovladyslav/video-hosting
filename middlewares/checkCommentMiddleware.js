const checkCommentMiddleware = (req, res, next) => {
	const { comment } = req.body;
	console.log(comment);
	if (!comment) {
		return res.status(400).json({ message: "Empty comment" });
	}

	if (typeof comment != "string") {
		return res.status(400).json({ message: "Bad Request" });
	}
	return next();
};

module.exports = checkCommentMiddleware;
