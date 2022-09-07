import React from "react";
import axios from "axios";
import "./Task.css";

const Task = ()=> {

    const [taskName, setTaskName] = useState({});
    const [taskDetail, setTaskDetail] = useState({});

    const Submit = async event => {
    event.preventDefault();
    
    const {data} = await axios.post('http://192.168.171.119:8082/users/login', {
      taskName, taskDetail
    }); 
    // console.log(response.data)
    axios.defaults.headers.common['Authorization']=`Bearer ${data['token']}`;
    
  }

    return (
        <div className="main">
            <h1 className="header">nu's to do list</h1>
            <div className="newtask" onSubmit={Submit}>
                <input 
                type="text"
                className="task-input" 
                placeholder="wathcu gonna do today?" />
                <input
                type="text" 
                className="task-input" 
                placeholder="any detail?" />
                <button className="create-btn" type="submit">create task</button>
            </div>
            <div>
                <div>
                    <a className="task-link" href="-">active task</a>
                    <a className="complete-link" href="-">complete task</a>
                </div>
                <div className="activetask">
                    <p className="task">task 1</p>
                    <button className="complete-btn">complete</button>
                    <button className="edit-btn">edit</button>
                    <button className="delete-btn">delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;