import React from "react";
import "./Regist.css";
import Praxis from "./Praxis.png";
import { useNavigate } from "react-router-dom";

const Regist = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <div className="form">
        <div className="img">
          <img src={Praxis} alt="logo-praxis" />
        </div>
        <label>email</label>
        <input className="form-input" />
        <label>username</label>
        <input className="form-input" />
        <label>password</label>
        <input className="form-input" />
        <label>password lagi</label>
        <input className="form-input" />
        <div className="regist">
          <button
            className="regist-btn"
            type="submit"
            onClick={() => navigate("/task")}
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Regist;
