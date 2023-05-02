const Sequelize = require("sequelize");

module.exports = new Sequelize(
	process.env.DB_NAME,
	process.env.USER_LOGIN,
	process.env.USER_PASSWORD,
	{
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
	}
);
