import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./Task.css";

export const Task = () => {
  var modal = document.getElementById("modal");
  const [newTask, setnewTask] = useState({ taskName: "", taskDetail: "" });
  const [update, setupdate] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    document.title = "home | todolist";
  }, []);

  const openModal = () => modal.style.display = "block";

  return (
    <div id="task-container">

      {/* add task's button */}
      <button id="modal-btn"
        onClick={openModal}
      >
        add new task
      </button>
      
      {/* add task's modal */}
      <div id="modal" onClick={(e)=>{if(e.target === modal){modal.style.display = "none"}}}>
        <div id="modal-content">
          <div id="modal-header">
            <span className="close" onClick={()=> modal.style.display = "none"}>&times;</span>
            <h2>add new task</h2>
          </div>
          <form id="add-task">
            <input
              type="text"
              id="taskName"
              placeholder="whatchu gunna do?"
              onChange={(e) =>
                setnewTask({ ...newTask, taskName: e.target.value })
              }
            />
            <input
              type="text"
              id="taskDetail"
              placeholder="any detail?"
              onChange={(e) =>
                setnewTask({ ...newTask, taskDetail: e.target.value })
              }
            />
            <input
              type="button"
              className="submit"
              value="add new task"
              onClick={() => {console.log(newTask); modal.style.display = "none"}}
            />
          </form>
        </div>
      </div>

      {/* task list */}
      <div id="task-box">
        {data
          ? data.map((data, index) => {
              return (
                <dl id="task-list" key={data.taskId}>
                  <button onClick={() => (data.taskId)}>
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
            })
          : null}
      </div>
    </div>
  );
};
