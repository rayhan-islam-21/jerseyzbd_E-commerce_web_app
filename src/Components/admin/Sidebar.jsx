"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaBoxOpen,
  FaChevronDown,
  FaShoppingCart,
  FaTachometerAlt,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const pathname = usePathname();
  const [openProducts, setOpenProducts] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      subMenu: [
        { name: "All Products", path: "/admin/products/allproducts" },
        { name: "Add Product", path: "/admin/products/add" },
        { name: "Categories", path: "/admin/products/categories" },
      ],
    },
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      path: "/admin/orders",
      badge: 3,
    },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          bg-[linear-gradient(168deg,#000000,#0d111c)] text-white min-h-screen border-r border-r-white/10 transition-all duration-200 ease-in-out
          overflow-hidden
          fixed top-0 inset-y-0 left-0 z-50
          ${sidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full"}
          md:relative md:translate-x-0 md:flex md:flex-col
        `}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
          <div className="text-xl font-bold">Admin Panel</div>
          <button onClick={toggleSidebar}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Desktop header */}
        <div className="hidden md:flex flex-col items-center justify-center p-4 ">
          <h1 className="text-2xl font-extrabold">Jerseyz</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index}>
              {!item.subMenu ? (
                <Link
                  href={item.path}
                  className={`flex items-center p-2 rounded hover:bg-gray-700 transition ${
                    pathname === item.path ? "bg-gray-700" : ""
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => setOpenProducts(!openProducts)}
                    className="flex items-center w-full p-2 rounded hover:bg-gray-700 transition"
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                    <FaChevronDown
                      className={`ml-auto transition-transform ${
                        openProducts ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openProducts && (
                    <div className="ml-8 mt-2 flex flex-col space-y-1">
                      {item.subMenu.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.path}
                          className={`p-2 rounded hover:bg-gray-700 transition ${
                            pathname === sub.path ? "bg-gray-700" : ""
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
