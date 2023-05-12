const commentForm = document.querySelector(".add-comment");
const currentToken = localStorage.getItem("token");
const videoId = document
	.querySelector(".video-source")
	.src.split("/")
	.slice(-1)
	.join("");

const submitComment = async (e) => {
	e.preventDefault();
	const res = await fetch("/comments/api/create-comment", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${currentToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			comment: commentForm.comment.value,
			videoId: videoId,
		}),
	});
	responseHandling(res, commentForm);
};

commentForm.addEventListener("submit", (e) => submitComment(e));
