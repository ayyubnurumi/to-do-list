import http from "./http.js";

const list = () => {
  return http.post("/task/list");
};

const detail = (id) => {
  return http.get(`/task/detail/${id}`);
};

const create = (data) => {
  return http.post("/task/create", data);
};

const update = (id, data) => {
  return http.put(`/task/update/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/task/delete/${id}`);
};

const findByTaskName = (taskName) => {
  return http.get(`/tutorials?title=${taskName}`);
};

const TaskService = {
  list,
  detail,
  create,
  update,
  remove,
  findByTaskName,
};

export default TaskService;