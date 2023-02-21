import { initTodo } from "./scripts/todoList.js";
import { renderTasks } from "./scripts/renderTask.js";
import { getTasksList } from "./scripts/tasksGateway.js";
import { setItem } from "./scripts/storage.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initTodo();
});

const listElem = document.querySelector(".list");

const onStorageChange = (e) => {
  if (e.key === "storageTasks") {
    listElem.innerHTML = "";
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);

// onStorageChange синхронизирует между вкладками
