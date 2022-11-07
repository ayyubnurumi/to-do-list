import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import './Task.css'

export const Task = () => {
  const [newTask, setnewTask] = useState({taskName: '', taskDetail: '', taskId: ''});
  const data = [
    {
      "taskDetail": "mato",
      "taskId": "11e762ff-2853-480a-8cf6-808c215377f0",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "mato",
      "taskId": "0dd85139-1a5d-4a53-a442-8139f66bb572",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "mato",
      "taskId": "47c41cd4-8b99-49d7-9857-e3c674c0e0e3",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "mato",
      "taskId": "aa3bd4bd-4072-49ad-8add-6c9a5d10d3cd",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "mato",
      "taskId": "4c39deb3-2cfb-4f6d-b892-2032ebd3615f",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "mato",
      "taskId": "0f4744bd-6c41-44e3-a391-e036f1891b57",
      "taskName": "ngopi "
    },
    {
      "taskDetail": "baru",
      "taskId": "af6e1d98-6580-44a6-998d-8ca9257c3274",
      "taskName": "bikin"
    },
    {
      "taskDetail": "viper",
      "taskId": "507de400-97d0-4081-a2dc-cda85acce35c",
      "taskName": "sebat"
    }
  ]
  return (
    <div id="task-container">
      <form id="add-task">
        <input type="text" id="taskName" onChange={(e) => setnewTask({...newTask, taskName: e.target.value})}/>
        <input type="text" id="taskDetail" onChange={(e) => setnewTask({...newTask, taskDetail: e.target.value})}/>
        <input type="submit" className="submit" value="add"/>
      </form>
      <div id="task-box">
        {data.map((data, index) => {
          return (
            <dl id="task-list">
              <button><FontAwesomeIcon icon={faCheck} /></button>
              <button><FontAwesomeIcon icon={faEdit} /></button>
              <dt>{index+1}. {data.taskName}</dt>
              <dd>{data.taskDetail}</dd>
            </dl>
          )
        })}
      </div>
    </div>
  );
};
