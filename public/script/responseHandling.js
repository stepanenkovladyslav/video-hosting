const responseHandling = async (res, form) => {
	if (!res.ok) {
		const error = await res.json();
		if (!document.querySelector(".error-message")) {
			const errorMessage = document.createElement("p");
			errorMessage.className = "error-message";
			errorMessage.textContent = error.message;
			form.append(errorMessage);
		}
	} else {
		const token = await res.json();
		localStorage.setItem("token", token);
		if (document.querySelector(".error-message")) {
			const error = document.querySelector(".error-message");
			form.removeChild(error);
		}
		const okMessage = document.createElement("p");
		okMessage.className = "ok-message";
		okMessage.textContent = "Success";
		form.append(okMessage);
	}
};
