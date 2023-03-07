const baseUrl = 'https://63a97540100b7737b9928dc7.mockapi.io/tasks';

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json())
  .then((tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id })));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
