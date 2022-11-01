import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router";

export const Login = () => {
  const [navigate, setnavigate] = useState(false);
  const [data, setdata] = useState({
    userName: "",
    userPassword: "",
  });
  console.log(data);

  async function onLogin() {
    try {
      await axios.post("http://192.168.1.12:8082/users/login", data);
      setnavigate(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (navigate) {
    return <Navigate to="/home" />;
  }

  return (
    <form onSubmit={onLogin}>
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
      <input type="submit" value="LogIn" />
    </form>
  );
};
