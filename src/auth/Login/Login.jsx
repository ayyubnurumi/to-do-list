import React, { useState } from "react";
import axios from "axios";
import "../Regist/Regist.css";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState({});
  const [userPassword, setUserPassword] = useState({});

  const [navigate, setNavigate] = useState(false);

  const Submit = async (event) => {
    event.preventDefault();

    const user = await axios.post("users/login", {
      userName,
      userPassword,
    });
    console.log(user.data)
    
    const userCredentials = user.data.accessToken;
    console.log(userCredentials)

    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));

    setNavigate(true);
  };

  if (navigate) {
    return <Navigate to="/activetask" />;
  }

  return (
    <div className="formcomp">
      <h1 className="img">yok login yok</h1>
      <form onSubmit={Submit}>
        <label>
          username
          <input
            className="form-input"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="sapa lo?"
          />
        </label>
        <label>
          password
          <input
            className="form-input"
            type="text"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="passwordnya apa hayoo.."
          />
        </label>
        <div className="regist">
          <button className="regist-btn" type="submit">
            signIn
          </button>
          <br />
          <a className="a-form" href="/registration">
            belom punya akun wak
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
