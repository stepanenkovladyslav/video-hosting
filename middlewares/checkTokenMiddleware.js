const checkTokenMiddleware = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
};

module.exports = checkTokenMiddleware;
