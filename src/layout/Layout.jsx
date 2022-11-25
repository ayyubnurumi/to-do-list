import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faUserSecret,
  faUserPlus,
  faCircle,
  faSignIn,
  faSignOut,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import "./Layout.css";

export const Layout = () => {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);

  const user = localStorage.getItem("userCredentials");

  const handleOpen = () => {
    setopen(!open);
  };

  const toProfile = () => {
    navigate("profile");
    setopen(false);
  };

  const toLogin = () => {
    navigate("login");
    setopen(false);
  };

  const toRegister = () => {
    navigate("registration");
    setopen(false);
  };

  const logout = () => {
    localStorage.removeItem("userCredentials");
    localStorage.removeItem("list");
    setopen(false);
    navigate("login");
  };

  return (
    <div id="body">
      <header id="header">
        <h1 id="title">
          <a className="link" href="home">
            to-do-list ayyub
          </a>
        </h1>
        {user ? (
          <button className="account" onClick={handleOpen}>
            <FontAwesomeIcon
              className="icon"
              icon={faUserAstronaut}
              mask={faCircle}
              size="3x"
            />
          </button>
        ) : (
          <button className="account" onClick={handleOpen}>
            <FontAwesomeIcon
              className="icon"
              icon={faUserSecret}
              mask={faCircle}
              size="3x"
            />
          </button>
        )}
        {open ? (
          user ? (
            <ul className="menu">
              <li>
                <button onClick={toProfile}>
                  <FontAwesomeIcon icon={faIdCard} fixedWidth /> Profile
                </button>
              </li>
              <li>
                <button className="danger" onClick={logout}>
                  <FontAwesomeIcon icon={faSignOut} fixedWidth /> LogOut
                </button>
              </li>
            </ul>
          ) : (
            <ul className="menu">
              <li>
                <button onClick={toLogin}>
                  <FontAwesomeIcon icon={faSignIn} fixedWidth /> LogIn
                </button>
              </li>
              <li>
                <button onClick={toRegister}>
                  <FontAwesomeIcon icon={faUserPlus} fixedWidth /> Register
                </button>
              </li>
            </ul>
          )
        ) : null}
      </header>
      <Outlet />
      <footer id="footer">made by ayyub</footer>
    </div>
  );
};
