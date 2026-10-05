let count = 0;

const countDisplay = document.getElementById("count");

function updateCount() {
	countDisplay.textContent = count;
	countDisplay.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
}

document.getElementById("increment").addEventListener("click", () => {
	count++;
	updateCount();
});

document.getElementById("decrement").addEventListener("click", () => {
	count--;
	updateCount();
});

document.getElementById("reset").addEventListener("click", () => {
	count = 0;
	updateCount();
});
