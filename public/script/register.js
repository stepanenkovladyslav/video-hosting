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

	responseHandling(res, form);
});
