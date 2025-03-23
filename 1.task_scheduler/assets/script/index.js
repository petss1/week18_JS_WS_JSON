document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); 
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText){
    const li = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type="checkbox";
    checkbox.classList.add("task-checkbox");

    li.textContent = taskText;
    li.prepend(checkbox); 
    document.getElementById("taskList").appendChild(li);

    saveTasks();

    taskInput.value = "";
}
});

document.getElementById("clearListBtn").addEventListener("click", function () {
    document.getElementById("taskList").innerHTML = ""; 
    saveTasks(); 
});

document.getElementById("taskList").addEventListener("change", function (event) {
if (event.target.classList.contains("task-checkbox")) {
    saveTasks(); 
}
});

function saveTasks() {
const tasks = [];
const taskList = document.querySelectorAll("#taskList li");;
for (let li of taskList) {
    const taskText = li.textContent.trim();
    const taskStatus = li.querySelector("input").checked;
    tasks.push({taskText, taskStatus});
}
localStorage.setItem("tasks", JSON.stringify(tasks));

document.getElementById("clearListBtn").disabled = taskList.length === 0;
}

function loadTasks() {
const tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks) {
    for (let task of tasks) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.taskStatus;

        li.textContent = task.taskText;
        li.prepend(checkbox);
        document.getElementById("taskList").appendChild(li);
    }
}

document.getElementById("clearListBtn").disabled = tasks && tasks.length === 0;
}

loadTasks();