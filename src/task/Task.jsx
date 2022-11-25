import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Task.css";
import axios from "axios";

export const Task = () => {
  const [newTask, setnewTask] = useState({ taskName: "", taskDetail: "" });
  const [update, setupdate] = useState(false);
  
  const getTaskList = async () => {
    const data = await axios.post("task/list");
    console.log(data);
    localStorage.setItem("list", JSON.stringify(data.data));
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post("task/create", newTask);
    setnewTask({taskName: '', taskDetail: ''})
    getTaskList();
  };

  const deleteTask = async (id) => {
    await axios.delete(`task/delete/${id}`);
    getTaskList();
    console.log(id);
  }

  const taskLisk = JSON.parse(localStorage.getItem("list"));

  return (
    <div id="task-container">
      <form id="add-task" onSubmit={addTask}>
        <input
          type="text"
          id="taskName"
          value={newTask.taskName}
          onChange={(e) => setnewTask({ ...newTask, taskName: e.target.value })}
        />
        <input
          type="text"
          id="taskDetail"
          value={newTask.taskDetail}
          onChange={(e) =>
            setnewTask({ ...newTask, taskDetail: e.target.value })
          }
        />
        <input type="submit" className="submit" value="add" />
      </form>
      <div id="task-box">
        { taskLisk ?
        taskLisk.map((data, index) => {
          return (
            <dl id="task-list" key={data.taskId}>
              <button onClick={() => deleteTask(data.taskId)}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => setupdate(!update)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <dt>
                {index + 1}. {data.taskName}
              </dt>
              <dd>{data.taskDetail}</dd>
            </dl>
          );
        }): null}
      </div>
    </div>
  );
};
