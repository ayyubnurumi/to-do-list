import axios from "axios";

const baseURL = "http://localhost:8082/";

export const getTaskList = async () => {
  const data = await axios.post(`${baseURL}task/list`);
  console.log(data);
  localStorage.setItem('list', JSON.stringify(data.data));
};

export const addTask = async (e, data) => {
  await axios
    .post(`${baseURL}task/create`, data);
    getTaskList();
};

export const deleteTask = async (id) => {
  await axios
    .delete(`${baseURL}task/delete/${id}`);
    getTaskList();
};

export const editTask = async (id) => {
  await axios.put(`${baseURL}task/update/${id}`);
  getTaskList();
};
