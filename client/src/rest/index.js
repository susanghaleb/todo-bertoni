import api from "../config/api";

const createModel = task => ({
  label: task,
  id: new Date().getTime(),
  done: false
});

const createTask = async task => api.post("create", createModel(task));
const readTasks = async task => api.get("read", task);
const updateTak = async task => api.put("update", task);
const deleteTask = async task => api.patch("delete", task);

export { createTask, readTasks, updateTak, deleteTask };
