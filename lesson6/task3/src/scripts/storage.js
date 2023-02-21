const storage = {
  tasksList: [],
};

export const setItem = (key, value) => {
  storage[key] = value;
  // localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = (key) => {
  return storage[key];
  // JSON.parse(localStorage.getItem(key))
};
