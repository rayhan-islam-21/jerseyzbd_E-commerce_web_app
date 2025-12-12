  "use client";

  import React from "react";
  import Header from "@/Components/Header";
  import ProductSidebar from "@/Components/ui/ProductSidebar";

  const Layout = ({ children }) => {
    return (
      <div className="min-h-screen relative bg-[#f2f0f1]/80 dark:bg-gray-900 flex">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 sticky top-0 h-screen   ">
          <ProductSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <div className="sticky top-0 z-20">
            <Header />
          </div>

          {/* Page content */}
          <div className="flex-1 p-10 overflow-auto">
            <h1 className="ml-6 mb-4 text-2xl text-gray-900 font-bold">All Products</h1>
            {children}
            </div>
        </main>
      </div>
    );
  };

  export default Layout;
