import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Task.css";

const Task = ()=> {

    const [taskName, setTaskName] = useState({});
    const [taskDetail, setTaskDetail] = useState({});

    async function Submit (e){
        e.preventDefault();
        await axios.post('task/create', {
            taskName, taskDetail
        });
    }

    useEffect(() => {
        (async ()=>{
            const {data}= await axios.post('task/list');
            setTaskName(data.taskName)
            setTaskDetail(data.taskDetail)
        })();
    }, []);

    return (
        <div className="main">
            <h1 className="header">nu's to do list</h1>
            <form className="newtask" onSubmit={Submit}>
                <input 
                type="text"
                onChange={e => setTaskName (e.target.value)}
                className="task-input" 
                placeholder="wathcu gonna do today?" />
               
                <input
                type="text"
                onChange={e => setTaskDetail (e.target.value)}
                className="task-input" 
                placeholder="any detail?" />
               
                <button className="create-btn" type="submit">create task</button>
            </form>
            <div>
                <div>
                    <a className="task-link" href="-">active task</a>
                    <a className="complete-link" href="-">complete task</a>
                </div>
                <div className="activetask">
                    {/* <p className="task">{taskName}{taskDetail}</p> */}
                    <button  className="complete-btn">complete</button>
                    <button  className="edit-btn">edit</button>
                    <button  className="delete-btn">delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;