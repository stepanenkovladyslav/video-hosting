const APIError = require("../error/ApiError");

const checkRegisterMiddleware = (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		throw APIError.badRequest("Empty field");
	}
	if (
		typeof username != "string" ||
		typeof email != "string" ||
		typeof password != "string"
	) {
		throw APIError.badRequest("Bad Request");
	}
	return next();
};

module.exports = checkRegisterMiddleware;
