import React from "react";
import "./Regist.css";
import Praxis from "./Praxis.png";
import { useNavigate } from "react-router-dom";

const Regist = () => {
  const navigate = useNavigate();

  // const [data, getData] = ({
  //   data: {
  //     userEmail: "",
  //     userName: "",
  //     userPassword1: "",
  //     userPassword2: ""
  //   },
  // });

  return (
    <div>
      <div className="formcomp">
        <div className="img">
          <img className="logo-praxis" src={Praxis} alt="logo-praxis" />
        </div>
        <form className="form" action="" method="POST">
          
          <input className="form-input"
          placeholder="email" 
          // value={data.userEmail}
          // onChange={getData} 
          type="text" />
          
          <input className="form-input"
          placeholder="username" 
          // value={data.userName}
          // onChange={getData} 
          type="text" />
          
          <input className="form-input" 
          placeholder="password"
          // value={data.userPassword1}
          // onChange={getData}
          type="text" />
          
          <input 
          className="form-input"
          placeholder="password lagi"
          // value={data.userPassword2}
          // onChange={getData}
          type="text" />

        </form>
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
