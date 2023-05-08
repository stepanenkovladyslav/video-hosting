const getTokenMiddlware = async (req, res, next) => {
	console.log(await req.headers.authorization);
	if (req.headers.authorization) {
		const oldToken = req.headers.authorization.split(" ")[1];
		req.token = oldToken;
		next();
	} else {
		console.log("bitch");
		next();
	}
};
module.exports = getTokenMiddlware;
