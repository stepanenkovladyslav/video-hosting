const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

const Comment = sequelize.define("Comment", {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	text: { type: DataTypes.STRING, allowNull: false },
});

const Video = sequelize.define("Video", {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	vid: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Video);
Video.hasMany(Comment);
User.hasMany(Comment);

module.exports = {
	User,
	Video,
	Comment,
};
