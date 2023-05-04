const { User } = require("../model/models");
const findUsersMiddleware = async (req, res, next) => {
	req.users = await User.findAll({ raw: true });
	return next();
};
module.exports = findUsersMiddleware;
