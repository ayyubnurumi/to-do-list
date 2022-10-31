import axios from "axios";
import React from "react";

export const ActiveTask = () => {
    const task = async() => await axios.post('http://192.168.1.34:8082/task/list')
    // console.log(task())
    return (
        <dl>
            <dt>taskName</dt>
            <dd>taskdetail</dd>
        </dl>
    )
}