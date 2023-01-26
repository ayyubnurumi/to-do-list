import React from "react";
import { Navigate } from "react-router";

export const PublicRoute = () => {
  const user = localStorage.getItem("userCredentials")
  return user ? <Navigate to={"home"} replace /> : <Navigate to={"login"} replace />;
};
