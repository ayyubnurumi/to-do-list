import React from "react";
import "../Regist/Regist.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="form">
      <h1 className="img">yok login yok</h1>
      <label>username</label>
      <input type="text" className="form-input" placeholder="sapa lo?"></input>
      <label>password</label>
      <input type="password" className="form-input" placeholder="passwordnya apa hayoo.."></input>
      <div className="regist">
        <button
          className="regist-btn"
          type="submit"
          onClick={() => navigate("/task")}
        >
          signIn
        </button>
        <br />
        <a className="a-form" href="/register">belom punya akun wak</a>
      </div>
    </div>
  );
};

export default Login;
