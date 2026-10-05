const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        taskForm.requestSubmit();
    }
});

taskForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const task = document.createElement("li");
	task.textContent = taskInput.value.trim();

	task.addEventListener("click", () => {
		task.classList.toggle("completed");
	});

	const deleteButton = document.createElement("button");
	deleteButton.type = "button";
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", (event) => {
		event.stopPropagation();
		task.remove();
		taskCount.textContent = taskList.children.length;
	});

	task.append(" ", deleteButton);
	taskList.appendChild(task);
	taskCount.textContent = taskList.children.length;
	taskInput.value = "";
	taskInput.focus();
});
