const button = document.getElementById("change-button");

button.addEventListener("click", () => {
	const title = document.getElementById("title");
	const message = document.querySelector("#message");

	title.textContent = "The DOM changed!";
	message.textContent = "JavaScript selected and updated these elements.";
	title.style.color = "blue";
	title.classList.add("active");
});
