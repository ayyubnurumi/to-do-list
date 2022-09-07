import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Regist from "../Regist/Regist";
import Task from "../Task/Task";

const Home = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regist />} />
      </Routes>
    </Router>
  );
};

export default Home;
