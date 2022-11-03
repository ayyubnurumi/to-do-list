import React from "react";
import { Outlet } from "react-router";

export const Task = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
      <Outlet />
    </div>
  );
};
