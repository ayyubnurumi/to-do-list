import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./auth.css";

export const Registration = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    userName: "",
    userEmail: "",
    userFirstName: "",
    userLastName: "",
    userPhoneNumber: "",
    userPassword1: "",
    userPassword2: "",
  });
  console.log(data);

  async function onSubmit(e) {
    try {
      e.preventDefault();
      await axios.post("users/register", data);
      navigate("login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="regist-container">
      <form className="auth" autoComplete="on">
        <h1>Registration</h1>
        <label htmlFor="userFirstName"> First Name</label>
        <input
          id="userFirstName"
          type="text"
          onChange={(e) => setdata({ ...data, userFirstName: e.target.value })}
          placeholder="what's your name?"
        />
        <label htmlFor="userLastName">Last Name</label>
        <input
          id="userLastNeme"
          type="text"
          onChange={(e) => setdata({ ...data, userLastName: e.target.value })}
          placeholder="any last name? or your family name?"
        />
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          required
          type="text"
          onChange={(e) => setdata({ ...data, userName: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="userEmail">E-mail</label>
        <input
          id="userEmail"
          required
          type="email"
          onChange={(e) => setdata({ ...data, userEmail: e.target.value })}
          placeholder="please enter a proper e-mail addres"
        />
        <label htmlFor="userPhoneNumber">Phone Number</label>
        <input
          id="userPhoneNumber"
          type="tel"
          pattern="0[0-9]{3}[0-9]{7-8}"
          onChange={(e) =>
            setdata({ ...data, userPhoneNumber: e.target.value })
          }
          placeholder="format: 088812345679"
        />
        <label htmlFor="userPassword1">Password</label>
        <input
          id="userPassword1"
          required
          minLength={3}
          type="password"
          onChange={(e) => setdata({ ...data, userPassword1: e.target.value })}
          placeholder="password"
          autoComplete="on"
        />
        <label htmlFor="userPassword2">Confirm Password</label>
        <input
          id="userPassword2"
          required
          minLength={3}
          type="password"
          onChange={(e) => setdata({ ...data, userPassword2: e.target.value })}
          placeholder="confirm password"
          autoComplete="on"
        />
        <input type="submit" onClick={onSubmit} />
        <p className="p">
          already have an account! <a href="login">logIn</a>
        </p>
      </form>
    </div>
  );
};
