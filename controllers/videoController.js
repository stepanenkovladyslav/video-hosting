const fs = require("fs");
const { Video } = require("../model/models");
const { log } = require("console");
const path = require("path");
const express = require("express");

const pathStyles = function () {
	return path.join(__dirname, "..", "views", "css", "home.css");
};

class VideoController {
	static async getAll(req, res) {
		const videos = await Video.findAll({ raw: true });
		const users = req.users;
		res.render("home.hbs", {
			videos: videos,
			styles: '<link href="../css/home.css" rel="stylesheet"></link>',
		});
	}

	static async getOne(req, res) {
		const range = req.headers.range;
		const id = +req.params.id;
		const video = await Video.findOne({ where: { id: id } });
		const videoPath = path.join(
			__dirname,
			`..`,
			"videos",
			`${video.fileName}`
		);
		const start = Number(range.replace(/\D/g, ""));
		const videoSize = fs.statSync(videoPath).size;
		const chunkSize = 10 ** 6;
		console.log(
			`ContentSize: ${videoSize}, Start: ${start}, ChunkSize: ${chunkSize}`
		);
		const end = Math.min(start + chunkSize, videoSize - 1);
		const contentLength = end - start + 1;
		const headers = {
			"Content-Range": `bytes ${start} - ${end}/${videoSize}`,
			"Accept-Ranges": "bytes",
			"Content-Length": contentLength,
			"Content-Type": "video/mp4",
		};
		res.writeHead(206, headers);

		const videoStream = fs.createReadStream(videoPath, { start, end });
		videoStream.pipe(res);
	}

	static async vidPage(req, res) {
		const id = +req.params.id;
		const video = await Video.findOne({ raw: true }, { where: { id } });
		res.render("video.hbs", {
			video: video,
			styles: '<link href="../css/vidPage.css" rel="stylesheet"></link>',
		});
	}
}

module.exports = VideoController;
