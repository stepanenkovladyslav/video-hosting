const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = {
		email: loginForm.email.value,
		password: loginForm.password.value,
	};
	const req = await fetch("/users/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!req.ok) {
		const error = await req.json();
		const errorMessage = document.createElement("p");
		errorMessage.textContent = error.message;
		errorMessage.className = "error-message";
		loginForm.append(errorMessage);
	} else {
		const response = await req.json();
		localStorage.setItem("token", response);
	}
});
