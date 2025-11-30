"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaTimes,
  FaBell,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/dashboard" },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      subMenu: [
        { name: "All Products", path: "/admin/products" },
        { name: "Add Product", path: "/admin/products/add" },
        { name: "Categories", path: "/admin/products/categories" },
      ],
    },
    { name: "Orders", icon: <FaShoppingCart />, path: "/admin/orders", badge: 3 },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4">
        <div className="text-xl font-bold">Admin Panel</div>
        <button onClick={() => setSidebarOpen(true)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sky-900 text-white transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex md:flex-col`}
      >
        {/* Header / Profile */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
          <div className="text-xl font-bold">Admin Panel</div>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center p-4 border-b border-gray-700">
          <h1 className="text-2xl font-extrabold">Jerseyz BD</h1>
        </div>

        {/* Theme Toggle
        <div className="hidden md:flex justify-center items-center p-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center p-2 rounded hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div> */}

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
                    className="flex items-center w-full p-2 rounded hover:bg-gray-700 transition focus:outline-none"
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

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 flex flex-col space-y-2">
          <button className="flex items-center p-2 rounded hover:bg-gray-700 transition">
            <FaBell className="mr-2" /> Notifications
          </button>
          <button className="flex items-center p-2 rounded hover:bg-gray-700 transition">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
