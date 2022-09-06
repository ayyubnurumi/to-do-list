import React, { useState } from "react";
import "./Regist.css";
import Praxis from "./Praxis.png";
// import { useNavigate } from "react-router-dom";

const Regist = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="formcomp">
        <div className="img">
          <img className="logo-praxis" src={Praxis} alt="logo-praxis" />
        </div>
        <form className="form" onSubmit={handleSubmit} action="" method="POST">
          
          <input className="form-input"
          placeholder="email" 
          name="userEmail"
          value={data.userEmail || ''}
          onChange={handleChange} 
          type="text" />
          
          <input className="form-input"
          placeholder="username" 
          name="userName"
          value={data.userName || ''}
          onChange={handleChange} 
          type="text" />
          
          <input className="form-input" 
          placeholder="password"
          name="userPassword1"
          value={data.userPassword1 || ''}
          onChange={handleChange}
          type="text" />
          
          <input 
          className="form-input"
          placeholder="password lagi"
          name="userPassword2"
          value={data.userPassword2 || ''}
          onChange={handleChange}
          type="text" />

          <button
            className="regist-btn"
            type="submit"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regist;
