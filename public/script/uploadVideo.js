const uploadForm = document.querySelector(".upload");
const userToken = localStorage.getItem("token");

uploadForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = new FormData(uploadForm);
	const res = await fetch("/api/upload", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${userToken}`,
		},
		body: data,
	});
	responseHandling(res, uploadForm);
});
