document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.parentElement.remove();
    } else if (e.target.classList.contains("updateBtn")) {
      const li = e.target.parentElement;
      const newTaskText = prompt("Update task:", li.firstChild.textContent);
      if (newTaskText !== null) {
        li.firstChild.textContent = newTaskText;
      }
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    }
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.classList.add("updateBtn");
    li.appendChild(updateBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }
});
