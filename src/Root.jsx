import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Root = () => {
  const sidebarRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/products") {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  });
  return (
    <>
      <main className="w-full min-h-screen bg-[#191919] py-0 sm:py-1">
        <Sidebar sidebarRef={sidebarRef} />
        <Header sidebarRef={sidebarRef} />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
