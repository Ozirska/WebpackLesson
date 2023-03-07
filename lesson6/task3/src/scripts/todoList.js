import { createElemToDo } from './createTask';
import { onToggleTask } from './update';
import './todoList.scss';

export const initTodo = () => {
  const createBtn = document.querySelector('.btn');
  createBtn.addEventListener('click', createElemToDo);

  const checkbox = document.createElement('input');
  checkbox.addEventListener('click', onToggleTask);
};
