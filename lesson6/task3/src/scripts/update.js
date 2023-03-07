import { renderTasks } from './renderTask';
import { setItem, getItem } from './storage';
import { updateTask, getTasksList, deleteTask } from './tasksGateway';

const listElem = document.querySelector('.list');

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const taskId = e.target.dataset.id;
  const taskList = getItem('tasksList');
  const { text, createDate } = taskList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTaskList) => {
      setItem('tasksList', newTaskList);
      listElem.innerHTML = '';
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  const isDeleteBtn = e.target.classList.contains('deleteBtn');
  if (!isDeleteBtn) {
    return;
  }

  const taskId = e.target.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTaskList) => {
      setItem('tasksList', newTaskList);
      listElem.innerHTML = '';
      renderTasks();
    });
};
