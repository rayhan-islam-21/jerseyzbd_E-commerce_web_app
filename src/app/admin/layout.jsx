"use client";
export const dynamic = "force-dynamic";

import Header from "@/Components/admin/Header";
import Sidebar from "@/Components/admin/Sidebar";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-200 ease-in-out z-50
          ${sidebarOpen ? "w-64" : "w-0"} overflow-hidden`}
      >
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-200 ease-in-out`}
        style={{ marginLeft: sidebarOpen ? 256 : 0 }} // 256px = 64 * 4 (Tailwind 16rem)
      >
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-4 bg-[linear-gradient(168deg,#000000,#0d111c)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
