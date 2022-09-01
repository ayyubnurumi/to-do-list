import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Regist from "../Regist/Regist";
import Task from "../Task/Task";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regist />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
};

export default Home;
