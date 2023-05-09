const form = document.querySelector(".register-form");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = {
		username: form.username.value,
		email: form.email.value,
		password: form.password.value,
	};
	const res = await fetch("/users/api/register", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) {
		const error = await res.json();
		const errorMessage = document.createElement("p");
		errorMessage.className = "error-message";
		errorMessage.textContent = error.message;
		form.append(errorMessage);
	} else {
		const respData = await res.json();
		localStorage.setItem("token", respData);
		if (form.lastChild.textContent == "Bad Request") {
			const error = document.querySelector(".error-message");
			form.removeChild(error);
		}
		const okMessage = document.createElement("p");
		okMessage.className = "ok-message";
		okMessage.textContent = "Successfully registered";
		form.append(okMessage);
	}
});
