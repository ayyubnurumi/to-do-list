import React, { Component, Fragment } from "react";
import "./Login.css";
import Praxis from "./Praxis.png";

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <div className="form">
                        <div className="img">
                            <img src={Praxis} alt="logo-praxis"/>
                        </div>
                        <label>email</label>
                        <input />
                        <label>username</label>
                        <input />
                        <label>password</label>
                        <input />
                        <label>password lagi</label>
                        <input />
                        <div className="regist">
                            <button className="regist-btn">register</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;