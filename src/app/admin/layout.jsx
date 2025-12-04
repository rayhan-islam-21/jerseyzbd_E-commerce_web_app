"use client";
import Header from "@/Components/admin/Header";
import Sidebar from "@/Components/admin/Sidebar";
import React, { use, useState } from "react";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Sidebar toggled:", !sidebarOpen);
  };

  return (
    <div className={`flex min-h-screen`}>
      {/* Sidebar */}
      <div
        className={`text white transition-all duration-200 ease-in-out `}
      >
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      {/* Main Content */}
      <div className="flex-1 transition-all duration-500 ease-in-out">
        <Header toggleSidebar={toggleSidebar} />

      <div className="p-4 bg-[linear-gradient(168deg,#000000,#0d111c)]">{children}</div>
  
      </div>
    </div>
  );
};

export default Layout;
