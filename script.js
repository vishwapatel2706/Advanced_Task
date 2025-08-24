const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, done: false });
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        if (task.done) {
            taskElement.classList.add('done');
        }
        taskElement.innerHTML = `
            ${task.text}
            <button class="delete-btn">Delete</button>
            <button class="done-btn">Done</button>
        `;
        taskElement.querySelector('.delete-btn').addEventListener('click', () => deleteTask(index));
        taskElement.querySelector('.done-btn').addEventListener('click', () => markTaskAsDone(index));
        taskList.appendChild(taskElement);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

function markTaskAsDone(index) {
    tasks[index].done = true;
    renderTaskList();
}
