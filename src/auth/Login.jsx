import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });
  console.log(data);

  async function onLogin(e) {
    try {
      e.preventDefault();
      await axios.post("http://192.168.1.54:8082/users/login", data);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form>
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
      <input type="submit" value="LogIn" onClick={onLogin}/>
    </form>
  );
};
