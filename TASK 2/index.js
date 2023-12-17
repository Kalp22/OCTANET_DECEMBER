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

    deleteCross.onclick = () => {
      taskList.removeChild(newTask);
      saveList();
    };

    taskLeft.appendChild(deleteCross);

    const taskText = document.createElement("span");
    taskText.innerText = task;
    taskLeft.appendChild(taskText);

    newTask.appendChild(taskLeft);

    taskList.appendChild(newTask);
    taskInput.value = "";

    const taskImage = document.createElement("img");
    taskImage.src = "checkbox-unchecked.svg";

    taskImage.onclick = () => selectItem(newTask);

    newTask.appendChild(taskImage);
  }

  saveList();
};

const selectItem = (newTask) => {
  newTask.classList.toggle("checked");
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
