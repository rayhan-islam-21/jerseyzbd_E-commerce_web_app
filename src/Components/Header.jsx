"use client";

import React, { useState, useId } from "react";
import { FaUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";

const MenuIcon = () => (
  <svg
    className="pointer-events-none"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315deg"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135deg"
    />
  </svg>
);

const NavigationMenu = ({ children, className = "" }) => (
  <nav className={`relative z-10 ${className}`}>{children}</nav>
);
const NavigationMenuList = ({ children, className = "" }) => (
  <ul className={`flex items-center ${className}`}>{children}</ul>
);
const NavigationMenuItem = ({ children, className = "", ...props }) => (
  <li className={`list-none ${className}`} {...props}>
    {children}
  </li>
);
const NavigationMenuLink = ({ href, className = "", children }) => (
  <a
    href={href}
    className={`block px-3 py-2 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);
const navigationLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/about",
    label: "About Us",
  },
];
const Header = () => {
  const pathname = usePathname();
  const id = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative w-full backdrop-blur-xl  bg-[#FFFFFF] dark:bg-black/80 border-gray-200 dark:border-gray-700 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {}
          <div className="shrink-0">
            <Link
              href="#"
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <h2 className="text-3xl font-extrabold text-black dark:text-teal-400">
                JerseyzBD
              </h2>
            </Link>
          </div>

          {}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium relative group transition-all duration-300
                        ${pathname===link.href? "text-red-600 border-b-4 border-b-red-500 dark:text-red-400 font-semibold":""}
                      `}
                      
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-500 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {}
          <div className="flex items-center gap-3">
            {}
            <div className="relative hidden lg:block">
              <div className="relative">
                <input
                  id={id}
                  className="w-64 h-10 pl-10 pr-4 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 backdrop-blur-sm transition-all duration-300"
                  placeholder="Search..."
                  type="search"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IoIosSearch
                    size={20}
                    className="text-gray-500 dark:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="hidden relative cursor-pointer sm:flex"
            >
              <ShoppingBag size={28} /> {/* bigger cart icon */}
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-600 text-white rounded-full">
                0
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="p-2 rounded-lg">
                  <FaUser size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="group text-gray-700  dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <MenuIcon />
              </Button>
            </div>
          </div>
        </div>

        {}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-600 mt-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="glass" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
