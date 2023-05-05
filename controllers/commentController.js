const { Comment } = require("../model/models");
class Comments {
	static async getAll(req, res) {
		const videoId = +req.params.id;
		const comments = await Comment.findAll({ where: { VideoId: videoId } });
		res.json(comments);
	}
}

module.exports = Comments;
