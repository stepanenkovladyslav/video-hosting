console.log(token);
if (token) {
	const hiddenContent = document.querySelectorAll(".auth-hide");
	hiddenContent.forEach((node) => {
		const classes = node.classList;
		classes.remove("auth-hide");
		classes.add("auth-show");
	});
}
