import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SharepointMenu from "../components/SharepointMenu";
import Home from "./Home/Home";

const Layout = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <SharepointMenu/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
