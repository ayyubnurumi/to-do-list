import axios from "axios";

export const getTaskList = async () => {
  const data = await axios.post("task/list");
  localStorage.setItem('list', JSON.stringify(data.data))
}; 

export const addTask = async (e, data) => {
  e.preventDefault();
  await axios.post("task/create", data);
  getTaskList();
};

export const deleteTask = async (id) => {
  await axios.delete(`task/delete/${id}`);
  getTaskList();
};

export const editTask = async (id) => {
    await axios.put(`task/update/${id}`);
    getTaskList();
}