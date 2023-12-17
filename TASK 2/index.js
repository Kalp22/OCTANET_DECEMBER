const taskInput = document.getElementById("task_input"); //new-task

const addItem = () => {
  const task = taskInput.value;
  if (task) {
    const taskList = document.getElementById("task_list");
    const newTask = document.createElement("li");

    const taskLeft = document.createElement("div");

    const deleteCross = document.createElement("span");
    deleteCross.innerHTML = "\u00d7";
    deleteCross.className = "deleteButton";

    taskLeft.appendChild(deleteCross);

    const taskText = document.createElement("span");
    taskText.innerText = task;
    taskLeft.appendChild(taskText);

    newTask.appendChild(taskLeft);

    taskList.appendChild(newTask);
    taskInput.value = "";

    const taskImage = document.createElement("img");
    taskImage.src = "checkbox-unchecked.svg";
    taskImage.className = "checkbox";

    newTask.appendChild(taskImage);
  }

  saveList();
};

addEventListener("click", (e) => {
  if (e.target.className === "deleteButton") {
    const newTask = e.target.parentElement.parentElement;
    deleteItem(newTask);
  }
  if (e.target.className === "checkbox") {
    const newTask = e.target.parentElement;
    selectItem(newTask);
  }
});

const selectItem = (newTask) => {
  newTask.classList.toggle("checked");

  saveList();
};

const deleteItem = (newTask) => {
  newTask.remove();

  saveList();
};

const saveList = () => {
  const taskList = document.getElementById("task_list");
  localStorage.setItem("tasks", taskList.innerHTML);
};

const loadList = () => {
  const taskList = document.getElementById("task_list");
  taskList.innerHTML = localStorage.getItem("tasks");
};

loadList();
