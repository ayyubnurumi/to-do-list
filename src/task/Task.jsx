import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Task.css";
// import axios from "axios";
import "../service/task-service"
import { addTask, deleteTask, getTaskList } from "../service/task-service";


export const Task = () => {
  const [newTask, setnewTask] = useState({ taskName: "", taskDetail: "" });
  const [update, setupdate] = useState(false);

  getTaskList();

  addTask(newTask);

  deleteTask();

  const taskList = JSON.parse(localStorage.getItem("list"));

  return (
    <div id="task-container">
      <form id="add-task">
        <input
          type="text"
          id="taskName"
          // value={newTask.taskName}
          onChange={(e) => setnewTask({ ...newTask, taskName: e.target.value })}
        />
        <input
          type="text"
          id="taskDetail"
          // value={newTask.taskDetail}
          onChange={(e) =>
            setnewTask({ ...newTask, taskDetail: e.target.value })
          }
        />
        <input type="submit" className="submit" value="add" onClick={addTask} />
      </form>
      <div id="task-box">
        { taskList ?
        taskList.map((data, index) => {
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
