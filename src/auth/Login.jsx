import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css"

export const Login = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });
  // console.log(data);

  async function onLogin(e) {
    try {
      e.preventDefault();
      const userCredentials = await axios.post("http://192.168.1.10:8082/users/login", data);
      localStorage.setItem('userCredentials', JSON.stringify(userCredentials.data))
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="login-container">
      <form className="auth" autoComplete="on">
        <h1>LogIn</h1>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          required
          placeholder="username"
          onChange={(e) => setdata({ ...data, userName: e.target.value })}
        />
        <label htmlFor="userPassword">Password</label>
        <input
          id="userPassword"
          type="password"
          required
          placeholder="password"
          onChange={(e) => setdata({ ...data, userPassword: e.target.value })}
        />
        <input type="submit" value="LogIn" onClick={onLogin} />
        <p className="p">don't have an account? <a href="registration">register</a></p>
      </form>
    </div>
  );
};
