import { createElemToDo } from "./createTask.js";
import { onToggleTask } from "./update.js";
import "./todoList.scss";

export const initTodo = () => {
  const createBtn = document.querySelector(".btn");
  createBtn.addEventListener("click", createElemToDo);

  const checkbox = document.createElement("input");
  checkbox.addEventListener("click", onToggleTask);
};
