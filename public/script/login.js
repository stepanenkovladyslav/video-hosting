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
	const token = await req.json();
	localStorage.setItem("token", token);
});
