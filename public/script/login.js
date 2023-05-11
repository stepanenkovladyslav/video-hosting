const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = {
		email: loginForm.email.value,
		password: loginForm.password.value,
	};
	const res = await fetch("/users/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) {
		const error = await res.json();
		if (!document.querySelector(".error-message")) {
			const errorMessage = document.createElement("p");
			errorMessage.textContent = error.message;
			errorMessage.className = "error-message";
			loginForm.append(errorMessage);
		}
	} else {
		const token = await res.json();
		localStorage.setItem("token", token);
		if (document.querySelector(".error-message")) {
			const error = document.querySelector(".error-message");
			loginForm.removeChild(error);
		}
		const okMessage = document.createElement("p");
		okMessage.className = "ok-message";
		okMessage.textContent = "Successfully logged in";
		loginForm.append(okMessage);
	}
});
