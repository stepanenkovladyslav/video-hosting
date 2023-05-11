if (token) {
	const hiddenContent = document.querySelectorAll(".auth-hide");
	const notAuthContent = document.querySelectorAll(".not-auth");
	notAuthContent.forEach((node) => node.remove());
	hiddenContent.forEach((node) => {
		const classes = node.classList;
		classes.remove("auth-hide");
		classes.add("auth-show");
	});
}
