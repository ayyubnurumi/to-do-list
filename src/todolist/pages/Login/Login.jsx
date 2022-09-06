import React, { useState } from "react";
import "../Regist/Regist.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {

  const [payload, setPayload] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPayload(values => ({...values, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(payload);
  };

  return (
    <div className="formcomp">
      <h1 className="img">yok login yok</h1>
      <form onSubmit={handleSubmit}>
        <label>username
          <input
            className="form-input"
            type="text"
            name="userName"
            value={payload.userName || ''}
            onChange={handleChange}
            placeholder="sapa lo?"
          />
        </label>
        <label>password
          <input
            className="form-input"
            type="text"
            name="userPassword"
            value={payload.userPassword || ''}
            onChange={handleChange}
            placeholder="passwordnya apa hayoo.."
          />
        </label>
        <input
          className="regist-btn"
          type="submit"
        />
      </form>
      <div className="regist">
        <br />
        <a className="a-form" href="/register">
          belom punya akun wak
        </a>
      </div>
    </div>
  );
};

export default Login;