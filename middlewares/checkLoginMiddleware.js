const APIError = require("../error/ApiError");

const checkLoginMiddleware = (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		throw APIError.badRequest("Empty email or password");
	}
	if (typeof email != "string" || typeof password != "string") {
		throw APIError.badRequest("Bad Request");
	}
	return next();
};

module.exports = checkLoginMiddleware;
