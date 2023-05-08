const express = require("express");
require("dotenv").config();
const sequelize = require("./db");
const router = require("./routes/router");
const { Sequelize } = require("sequelize");
const models = require("./model/models");
const hbs = require("hbs");
const expressHbs = require("express-handlebars");
const getTokenMiddlware = require("./middlewares/getTokenMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/dbname", (req, res) => res.send(process.env.DB_NAME));
app.engine(
	"hbs",
	expressHbs.engine({
		layoutsDir: "views",
		defaultLayout: "layout",
		extname: "hbs",
	})
);
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));
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
