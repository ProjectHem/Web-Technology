//console.log("it has been connected");

const form = document.querySelector("#betlog");
const taskInput = document.querySelector("#Task");
const taskList = document.querySelector("#List");
const error = document.querySelector("#error");

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        error.textContent = "Task cannot be empty";
        return;
    }

    error.textContent = "";

    const li = document.createElement('li');
    li.textContent = taskText;
    li.id="newTask";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.id="Del";

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});