import React from "react";
import { Outlet, Route } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRoute = () => {
    const isAuth=true;
  return isAuth?<Outlet/>:<Login/>;
};

export default PrivateRoute;
