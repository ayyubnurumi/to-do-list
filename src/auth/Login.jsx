import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import authService from "../service/authService";
import "./auth.css";

export const Login = () => {
  useEffect(() => {
    document.title = "login | todolist";
  }, []);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });

  const onLogin = () => {
    authService
      .login()
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp));
        navigate("/home");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div id="login-container">
      <form className="auth" autoComplete="on">
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
        <input type="button" value="login" onClick={onLogin} />
        <p className="p">
          don't have an account? <a href="registration">register</a>
        </p>
      </form>
    </div>
  );
};
