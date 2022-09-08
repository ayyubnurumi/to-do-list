import React, { useState } from "react";
import axios from "axios";
import "./Task.css";

const Task = ()=> {

    const [taskName, setTaskName] = useState({});
    const [taskDetail, setTaskDetail] = useState({});

    // const Submit = async e => {
    //     e.preventDefault();
        
    //     const {data} = await axios.post('http://192.168.1.17:8082/task/create', {
    //         taskName, taskDetail
    //     }); 
    //     // console.log(data);
    //     // axios.defaults.headers.common['Authorization']=`Bearer ${data['token']}`;    
    //     // console.log(taskName, taskDetail)
    // }
    async function Submit (e){
        e.preventDefault();
        await axios.post('http://192.168.1.17:8082/task/create', {
            taskName, taskDetail
        });
    }

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
                    <p className="task">task 1</p>
                    <button  className="complete-btn">complete</button>
                    <button  className="edit-btn">edit</button>
                    <button  className="delete-btn">delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;