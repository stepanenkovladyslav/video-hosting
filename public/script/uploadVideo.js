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
	if (!res.ok) {
		const error = await res.json();
		if (!document.querySelector(".error-message")) {
			const errorMessage = document.createElement("p");
			errorMessage.className = "error-message";
			errorMessage.textContent = error.message;
			uploadForm.append(errorMessage);
		}
	} else {
		if (document.querySelector(".error-message")) {
			const error = document.querySelector(".error-message");
			uploadForm.removeChild(error);
		}
		const respMessage = await res.json();
		const okMessage = document.createElement("p");
		okMessage.className = "ok-message";
		okMessage.textContent = respMessage.message;
		uploadForm.append(okMessage);
	}
});
