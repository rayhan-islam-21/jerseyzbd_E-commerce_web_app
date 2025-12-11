"use client";

import React from "react";

import  Sidebar  from "@/Components/admin/Sidebar";
import  Header  from "@/Components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at top */}
      <Header />

      {/* Main content with sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r border-gray-300">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
