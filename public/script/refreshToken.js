const token = localStorage.getItem("token");

if (token) {
	const refreshToken = async () => {
		const res = await fetch("/users/api/auth", {
			method: "GET",
			headers: {
				Authorization: `Bearer: ${token}`,
			},
		});
		const newToken = await res.json();
		localStorage.setItem("token", newToken);
	};
	refreshToken();
}
