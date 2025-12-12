"use client";

import React from "react";
import Header from "@/Components/Header";
import ProductSidebar from "@/Components/ui/ProductSidebar";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f2f0f1]/80 dark:bg-gray-900">
      {/* Fixed Sidebar */}
      <aside className={`w-72 ${pathname==="/products"?  "block" : "hidden"} fixed top-0 left-0 h-screen bg-white shadow-md z-30`}>
        <ProductSidebar />
      </aside>

      {/* Main Section shifted by sidebar width */}
      <div className={` ${pathname==="/products"?  "ml-72" : "ml-0"}  flex flex-col min-h-screen`}>
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm">
          <Header />
        </div>

        {/* Page content */}
        <div className="flex-1 flex p-6 items-start flex-col justify-center overflow-auto">
          {pathname === "/products" ? (
            <h1 className="ml-6 mb-4 text-2xl text-gray-900 font-bold">
              All Products
            </h1>
          ) : (
            <h1 className=" ml-32 mt-4 border-b-4 border-b-red-600  text-start text-2xl text-gray-900 font-bold">
              Product Details
            </h1>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
