const Users = require("../model/models");
const findUsersMiddleware = async (req, res, error) => {
	if (error) throw error;
	req.users = await Users.findAll({ raw: true });
	next();
};
