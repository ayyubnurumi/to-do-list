import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./auth.css";

export const Registration = () => {
  useEffect(() => {
    document.title = "registration | todolist";
  },[]);
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
  
  function onSubmit() {
    console.log(data);
    navigate("login")
  }

  return (
    <div id="regist-container">
      <form className="auth" autoComplete="on">
        <h1>registration</h1>
        <label htmlFor="userFirstName">first name</label>
        <input
          id="userFirstName"
          type="text"
          onChange={(e) => setdata({ ...data, userFirstName: e.target.value })}
          placeholder="what's your name?"
        />
        <label htmlFor="userLastName">last name</label>
        <input
          id="userLastNeme"
          type="text"
          onChange={(e) => setdata({ ...data, userLastName: e.target.value })}
          placeholder="any last name? or your family name?"
        />
        <label htmlFor="userName">username</label>
        <input
          id="userName"
          required
          type="text"
          onChange={(e) => setdata({ ...data, userName: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="userEmail">e-mail</label>
        <input
          id="userEmail"
          required
          type="email"
          onChange={(e) => setdata({ ...data, userEmail: e.target.value })}
          placeholder="please enter a proper e-mail addres"
        />
        <label htmlFor="userPhoneNumber">phone number</label>
        <input
          id="userPhoneNumber"
          type="tel"
          pattern="0[0-9]{3}[0-9]{7-8}"
          onChange={(e) =>
            setdata({ ...data, userPhoneNumber: e.target.value })
          }
          placeholder="format: 088812345679"
        />
        <label htmlFor="userPassword1">password</label>
        <input
          id="userPassword1"
          required
          minLength={3}
          type="password"
          onChange={(e) => setdata({ ...data, userPassword1: e.target.value })}
          placeholder="password"
          autoComplete="on"
        />
        <label htmlFor="userPassword2">confirm password</label>
        <input
          id="userPassword2"
          required
          minLength={3}
          type="password"
          onChange={(e) => setdata({ ...data, userPassword2: e.target.value })}
          placeholder="confirm password"
          autoComplete="on"
        />
        <input type="submit" value='submit' onClick={onSubmit} />
        <p className="p">
          already have an account! <a href="login">login</a>
        </p>
      </form>
    </div>
  );
};
