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
	if (!res.ok) {
		const error = await res.json();
		if (!document.querySelector(".error-message")) {
			const errorMessage = document.createElement("p");
			errorMessage.textContent = error.message;
			errorMessage.className = "error-message";
			commentForm.append(errorMessage);
		}
	} else {
		if (document.querySelector(".error-message")) {
			const error = document.querySelector(".error-message");
			commentForm.removeChild(error);
		}
		const okMessage = document.createElement("p");
		okMessage.className = "ok-message";
		okMessage.textContent = "Successfully added comment";
		commentForm.append(okMessage);
	}
};

commentForm.addEventListener("submit", (e) => submitComment(e));
