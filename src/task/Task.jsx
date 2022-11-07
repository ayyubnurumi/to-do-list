import React from "react";
import './Task.css'

export const Task = () => {
  return (
    <div id="task-container">
      <form id="add-task">
        <input type="text" id="taskName" />
        <input type="text" id="taskDetail" />
        <input type="submit" value="add"/>
      </form>
      <ol id="task-list">
        <li>task</li>
      </ol>
    </div>
  );
};
