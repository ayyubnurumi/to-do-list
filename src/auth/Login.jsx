import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export const Login = () => {
  useEffect(() => {
    document.title = "login | todolist";
  },[]);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });

  const onLogin = () => {
    console.log(data);
    localStorage("user", JSON.stringify(data));
    navigate("/home");
  };

  return (
    <div id="login-container">
      <form className="auth" autoComplete="on" onSubmit={onLogin}>
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
        <input type="submit" value="login" />
        <p className="p">
          don't have an account? <a href="registration">register</a>
        </p>
      </form>
    </div>
  );
};