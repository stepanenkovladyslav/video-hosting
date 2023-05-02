const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../model/models");

const generateJwt = (id, email) => {
	return jwt.sign({ id, email }, process.env.SECRET_KEY, {
		expiresIn: "24h",
	});
};

class UserController {
	static async register(req, res) {
		const { email, password } = req.body;
		const hashPassword = await bcrypt
			.hash(password, 10)
			.catch((err) => console.log(err));
		const user = await User.create({
			email: email,
			password: hashPassword,
		});
		const token = generateJwt(user.id, user.email);
		res.json(token);
	}

	static login(req, res) {}

	static update(req, res) {}

	static logout(req, res) {}
}

module.exports = UserController;
