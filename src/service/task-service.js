import axios from "axios";

export const getTaskList = async () => {
  const data = await axios.post("task/list");
  localStorage.setItem("list", JSON.stringify(data.data));
};

export const addTask = async (data) => {
  // e.preventDefault();
  await axios
    .post("task/create", data)
    .then(getTaskList(), (error) => console.log(error));
};

export const deleteTask = async (id) => {
  // e.preventDefault();
  await axios
    .delete(`task/delete/${id}`)
    .then(getTaskList(), (error) => console.log(error));
};

export const editTask = async (id) => {
  await axios.put(`task/update/${id}`);
  getTaskList();
};
