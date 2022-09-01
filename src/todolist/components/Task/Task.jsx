import React from "react";
import "./Task.css";

const Task = () => {
    return (
        <div className="main">
            <h1 className="header">nu's to do list</h1>
            <div className="newtask">
                <input placeholder="wathcu gonna do today?" />
                <button className="create-btn">create task</button>
            </div>
            <div>
                <p className="header2">active task</p>
                <div className="activetask">
                    <p className="task">task 1</p>
                    <p className="task">task 1</p>
                    <p className="task">task 1</p>
                    <button className="edit-btn">edit</button>
                    <button className="delete-btn">delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;