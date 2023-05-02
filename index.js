const express = require("express");
require("dotenv").config();
const sequelize = require("./db");
const router = require("./routes/router");
const { Sequelize } = require("sequelize");
const models = require("./model/models");

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/dbname", (req, res) => res.send(process.env.DB_NAME));

app.use("/", router);

const connect = async () => {
	try {
		sequelize.authenticate();
		sequelize.sync();
		app.listen(PORT, () => console.log(`App started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};
connect();
