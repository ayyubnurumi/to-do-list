import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export const Login = () => {
  useEffect(() => {
    document.title = "login | todolist";
  });
  const navigate = useNavigate();
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });

  const onLogin = () => {
    axios
      .post(`http://localhost:8082/users/login`, data)
      .then((response) => {
        console.log(response.data);
        if (response !== undefined || null) {
          localStorage.setItem(
            "userCredentials",
            JSON.stringify(response.data)
          );
          navigate('home');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="login-container">
      <form className="auth" autoComplete="on" method="post">
        <h1>login</h1>
        <label htmlFor="userName">username</label>
        <input
          id="userName"
          type="text"
          required
          placeholder="username"
          onChange={(e) => setdata({ ...data, userName: e.target.value })}
        />
        <label htmlFor="userPassword">password</label>
        <input
          id="userPassword"
          type="password"
          required
          placeholder="password"
          autoComplete="your password"
          onChange={(e) => setdata({ ...data, userPassword: e.target.value })}
        />
        <input type="submit" value="login" onClick={onLogin} />
        <p className="p">
          don't have an account? <a href="registration">register</a>
        </p>
      </form>
    </div>
  );
};
