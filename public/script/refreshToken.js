const token = localStorage.getItem("token");

if (token) {
	const refreshToken = async () => {
		const res = await fetch("/users/api/auth", {
			method: "GET",
			headers: {
				Authorization: `Bearer: ${token}`,
			},
		});
		if (!res.ok) {
			const error = await res.json();
			localStorage.removeItem("token");
			console.log(error);
		} else {
			const newToken = await res.json();
			localStorage.setItem("token", newToken);
		}
	};
	refreshToken();
}
