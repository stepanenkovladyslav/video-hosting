const checkRegisterMiddleware = (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		return res.status(400).json({ message: "Bad Request" });
	}
	if (
		typeof username != "string" ||
		typeof email != "string" ||
		typeof password != "string"
	) {
		return res.status(400).json({ message: "Bad Request" });
	}
	return next();
};

module.exports = checkRegisterMiddleware;
