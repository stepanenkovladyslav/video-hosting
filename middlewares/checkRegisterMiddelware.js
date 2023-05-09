const checkRegisterMiddleware = (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res.sendStatus(400);
	}
	if (
		typeof username != "string" ||
		typeof email != "string" ||
		typeof password != "string"
	) {
		return res.sendStatus(400);
	}
	return next();
};

module.exports = checkRegisterMiddleware;
