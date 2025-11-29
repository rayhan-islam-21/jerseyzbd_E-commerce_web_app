import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative  w-full flex items-center justify-center">

      {/* 🔹 Background Image With Blur */}
      <div className="absolute inset-0 bg-[url('/auth_img.jpeg')] bg-cover bg-center blur-xs"></div>

      {/* 🔹 Optional dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🔹 Content (NOT blurred) */}
      <div className="relative z-10 md:p-6 p-2">
        {children}
      </div>

    </div>
  );
};

export default Layout;
