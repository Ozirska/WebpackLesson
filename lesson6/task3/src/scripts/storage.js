const storage = {
  tasksList: [],
};

export const setItem = (key, value) => {
  storage[key] = value;
  // localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = (key) => storage[key];
