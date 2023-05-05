const { Comment } = require("../model/models");
class Comments {
	static async create(req, res) {
		const { comment } = req.body;
		const userId = 1; //for experimenting
		const videoId = 1;
		const createdComment = await Comment.create({
			text: comment,
			UserId: userId,
			VideoId: videoId,
		});
		res.json(createdComment);
	}
}

module.exports = Comments;
