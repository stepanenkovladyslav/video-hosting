const { Comment } = require("../model/models");
const jwt = require("jsonwebtoken");
class Comments {
	static async create(req, res) {
		const { comment, videoId } = req.body;
		const token = req.headers.authorization.split(" ")[1];
		const user = jwt.decode(token);
		const userId = user.id;
		const video = videoId;
		const createdComment = await Comment.create({
			text: comment,
			UserId: userId,
			VideoId: videoId,
		});
		res.json({ message: "Comment added" });
	}
}

module.exports = Comments;
