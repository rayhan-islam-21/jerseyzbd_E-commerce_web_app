import Header from "@/Components/admin/Header";
import Sidebar from "@/Components/admin/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="grid min-h-screen 
      grid-cols-1 
      lg:grid-cols-[250px_1fr]">

      {/* Sidebar */}
      <div className="lg:block hidden">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (slide-in / toggle later) */}
      <div className="lg:hidden block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full">
        <Header />

        <div className="p-4">
          {/* MAIN CONTENT WILL GO HERE */}
        </div>
      </div>
    </div>
  );
};

export default page;
