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

	static registerPage(req, res) {
		res.render("create-account.hbs", {
			styles: '<link href="../css/createAcc.css" rel="stylesheet"></link>',
		});
	}
	static async login(req, res) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (user) {
			const comparePassword = await bcrypt.compare(
				password,
				user.password
			);
			if (comparePassword) {
				const token = generateJwt(user.id, user.email);
				res.json(token);
			} else {
				res.status(404).json({ message: "Wrong password" });
			}
		} else {
			res.status(404).json({ message: "Wrong email or password" });
		}
	}

	static async updateToken(req, res) {
		try {
			const oldToken = req.headers.authorization.split(" ")[1];
			const verifier = jwt.verify(oldToken, process.env.SECRET_KEY);
			const user = verifier;
			const newToken = generateJwt(user.id, user.email);
			res.json(newToken);
		} catch (e) {
			res.json({ error: "Wrong token" });
		}
	}
}

module.exports = UserController;
