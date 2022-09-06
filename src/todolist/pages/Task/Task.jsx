import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
    render(){
        return (
            <div className="main">
                <h1 className="header">nu's to do list</h1>
                <div className="newtask">
                    <input className="task-input" placeholder="wathcu gonna do today?" />
                    <button className="create-btn">create task</button>
                </div>
                <div>
                    <div>
                        <a className="task-link" href="-">active task</a>
                        <a className="complete-link" href="-">complete task</a>
                    </div>
                    <div className="activetask">
                        <p className="task">task 1</p>
                        <p className="task">task 1</p>
                        <p className="task">task 1</p>
                        <button className="complete-btn">complete</button>
                        <button className="edit-btn">edit</button>
                        <button className="delete-btn">delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;