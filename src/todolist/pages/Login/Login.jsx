import React, { useState } from "react";
import axios from "axios";
import "../Regist/Regist.css";
import { Navigate } from "react-router-dom";

const Login = () => {

  const [userName, setUserName] = useState({});
  const [userPassword, setUserPassword] = useState({});
  
  const [navigate, setNavigate] = useState(false);

  const Submit = async event => {
    event.preventDefault();
    
    const {data} = await axios.post('http://192.168.1.15:8082/users/login', {
      userName, userPassword
    }, {withCredentials: true}); 
    
    axios.defaults.headers.common['Authorization']=`Bearer ${data['token']}`;
    
    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to='/' />
  }

  return (
    <div className="formcomp">
      <h1 className="img">yok login yok</h1>
      <form onSubmit={Submit}>
        <label>username
          <input
            className="form-input"
            type="text"
            onChange={e => setUserName(e.target.value)}
            placeholder="sapa lo?"
          />
        </label>
        <label>password
          <input
            className="form-input"
            type="text"
            onChange={e => setUserPassword(e.target.value)}
            placeholder="passwordnya apa hayoo.."
          />
        </label>
        <div className="regist">
          <input
            className="regist-btn"
            type="submit"
          />
          <br />
          <a className="a-form" href="/register">
            belom punya akun wak
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;