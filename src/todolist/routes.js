import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//history
// import { history } from './helpers/history';

//pages
import RouteGuard from "./components/RouteGuard";
import Login from "./pages/Login";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="*" element={<RouteGuard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navigate to="*" replace />
    </>
  );
}

export default Routing;
