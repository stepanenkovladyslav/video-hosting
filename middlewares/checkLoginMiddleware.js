const checkLoginMiddleware = (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.sendStatus(400);
	}
	if (typeof email != "string" || typeof password != "string") {
		return res.sendStatus(400);
	}
	return next();
};

module.exports = checkLoginMiddleware;
