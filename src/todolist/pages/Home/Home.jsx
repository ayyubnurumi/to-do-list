import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Task from "../../components/Task";

class Home extends Component {
    render(){
        return(
            <BrowserRouter>
                <nav>
                   <Link>akun</Link>
                   <Link>active task</Link>
                   <Link>complete task</Link>
                </nav>
                <Routes>
                    <Route />
                    <Route />
                    <Route />
                </Routes>
                <Task />
            </BrowserRouter>
        )
    }
}

export default Home;