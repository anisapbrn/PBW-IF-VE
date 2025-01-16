document.addEventListener("DOMContentLoaded", function () {
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskCount = document.getElementById("taskCount");
const progressBar = document.getElementById("progress");

let editingTaskElement = null;

// Update progress stats
function updateTaskStats() {
    const totalTasks = taskList.children.length;
    const completedTasks = document.querySelectorAll("#taskList .task.completed").length;
    taskCount.textContent = `${completedTasks} / ${totalTasks}`;

    const progressPercentage = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.style.width = `${progressPercentage}%`;
}

// Toggle task completion
function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle("completed");
    const taskName = taskElement.querySelector("span");
    taskName.style.textDecoration = taskElement.classList.contains("completed")
        ? "line-through"
        : "none";

    updateTaskStats();
}

// Initialize task stats on load
updateTaskStats();
});