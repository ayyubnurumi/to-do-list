import React, { useState } from "react";
import axios from "axios";
import "./Regist.css";
import Praxis from "./Praxis.png";
import { Navigate } from "react-router-dom";

const Regist = () => {

  const [userName, setUserName] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userFirstName, setUserFirstName] = useState({});
  const [userLastName, setUserLastName] = useState({});
  const [userPhoneNumber, setUserPhoneNumber] = useState({});
  const [userPassword1, setUserPassword1] = useState({});
  const [userPassword2, setUserPassword2] = useState({});
  
  const [navigate, setNavigate] = useState(false);

  const Submit = async event => {
    event.preventDefault();
    await axios.post('http://192.168.171.119:8082/users/register', {
      userName, userEmail, userFirstName, userLastName, userPhoneNumber, userPassword1, userPassword2
    });
    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to='/login' />
  }

  return (
    <div>
      <div className="formcomp">
        <div className="img">
          <img className="logo-praxis" src={Praxis} alt="logo-praxis" />
        </div>
        <form className="form" onSubmit={Submit}>
          
          <input className="form-input"
          placeholder="username"
          onChange={e => setUserName(e.target.value)} 
          type="text" />

          <input className="form-input"
          placeholder="email"
          onChange={e => setUserEmail(e.target.value)} 
          type="text" />
          
          <input className="form-input"
          placeholder="First Name"
          onChange={e => setUserFirstName(e.target.value)} 
          type="text" />

          <input className="form-input"
          placeholder="Last Name"
          onChange={e => setUserLastName(e.target.value)} 
          type="text" />

          <input className="form-input"
          placeholder="Phone Number"
          onChange={e => setUserPhoneNumber(e.target.value)} 
          type="text" />
          
          <input className="form-input" 
          placeholder="password"
          onChange={e => setUserPassword1(e.target.value)}
          type="text" />
          
          <input 
          className="form-input"
          placeholder="password lagi"
          onChange={e => setUserPassword2(e.target.value)}
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
