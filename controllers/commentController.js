const { Comment } = require("../model/models");
const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
class Comments {
	static async create(req, res, next) {
		const { comment, videoId } = req.body;
		const token = req.headers.authorization.split(" ")[1];
		const user = jwt.decode(token);
		if (user) {
			const userId = user.id;
			const video = videoId;
			const createdComment = await Comment.create({
				text: comment,
				UserId: userId,
				VideoId: videoId,
			});
			res.json({ message: "Comment added" });
		} else {
			next(ApiError.unauthorized("Authenticaton failed"));
		}
	}
}

module.exports = Comments;
