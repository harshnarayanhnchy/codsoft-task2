const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });
    }
});
