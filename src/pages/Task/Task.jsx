import React, { useState } from "react";
import axios from "axios";
import "./Task.css";
import { Outlet, useNavigate } from "react-router";

const Task = ()=> {
    const navigate = useNavigate()

    const [taskName, setTaskName] = useState({});
    const [taskDetail, setTaskDetail] = useState({});

    async function Submit (e){
        e.preventDefault();
        await axios.post('task/create', {
            taskName, taskDetail
        });
    }

    const logout = () =>  {
        localStorage.removeItem('userCredentials');
        navigate('/login')
    }

    return (
        <div className="main">
            <h1 className="header">nu's to do list</h1>
            <button className="logout" onClick={() => logout()} >LogOut</button>
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
                    <a className="task-link" href="/activetask">active task</a>
                    <a className="complete-link" href="/completetask">complete task</a>
                </div>
                <div className="activetask">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Task;