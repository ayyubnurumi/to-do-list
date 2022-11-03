import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router";

export const Registration = () => {
  const [navigate, setnavigate] = useState(false);
  const [data, setdata] = useState({
    userFirsName: "",
    userLastName: "",
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword1: "",
    userPassword2: "",
  });
  // console.log(data);

  async function onSubmit() {
    await axios.post('http://192.168.1.12:8082/users/register', data)
    setnavigate(true);
  }

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <form method="post" autoComplete="on">
      <h1>Registration</h1>
      <label htmlFor="userFirstName"> First Name</label>
      <input
        id="userFirstName"
        type="text"
        onChange={(e) => setdata({ ...data, userFirsName: e.target.value })}
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
        pattern="0[0-9]{3}-[0-9]{4}-[0-9]{4}"
        onChange={(e) => setdata({ ...data, userPhoneNumber: e.target.value })}
        placeholder="format: 0888-1234-5679"
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
      <p className="p">already have an account! <a href="login">logIn</a></p>
    </form>
  );
};
