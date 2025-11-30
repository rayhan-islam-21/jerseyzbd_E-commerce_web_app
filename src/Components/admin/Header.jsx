import React from "react";
import { Button } from "../ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
import Image from "next/image";
import { IoNotifications } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5"; // Added search icon

const item = [
  { icon: FaMoon, title: "Dark Mode" },
  { icon: IoNotifications, title: "Notifications" },
  { icon: TbSettingsFilled, title: "Settings" },
];

const Header = () => {
  return (
    // 1. HEADER CONTAINER: Full width, fixed height, shadows, consistent padding
    <header className="flex items-center justify-between h-16 px-6  border-gray-700 bg-sky-900 text-white">
      
      {/* 2. LEFT SECTION: Toggler and Welcome Message */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          <FaBarsStaggered size={20} />
        </Button>
        <h1 className="text-xl font-semibold hidden sm:block">Welcome</h1>
      </div>

      {/* 3. RIGHT SECTION: Search Bar and User/Icon Group */}
      <div className="flex items-center space-x-6">

        {/* 3a. SEARCH BAR (Simplified for Dashboard Look) */}
        <div className="relative hidden md:block">
          <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="search"
            placeholder="Search"
            className="w-64 p-2 pl-10 text-sm rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* 3b. ICONS & AVATAR GROUP */}
        <div className="flex items-center space-x-2">
          
          {/* Action Icons (Moon, Notifications, Settings) */}
          {item.map((iconItem, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              className="text-gray-100 hover:text-black p-2 h-auto rounded-full"
            >
              <iconItem.icon size={20} />
            </Button>
          ))}
          
          {/* User Avatar */}
          <div className="ml-4 cursor-pointer">
            <Image
              // Removed redundant class="..." and replaced with Tailwind classes
              className="w-10 h-10 rounded-full border-2 border-gray-600 object-cover" 
              width={32} // Set width/height explicitly for Next.js Image
              height={32}
              src="/image.png"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;