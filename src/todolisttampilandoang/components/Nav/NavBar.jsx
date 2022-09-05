import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Router>
            <div>
                <Link>active task</Link>
                <Link>complete task</Link>
            </div>
            <Routes>
                <Route>active task</Route>
                <Route>complete task</Route>
            </Routes>
        </Router>
    )
}

export default Navbar;