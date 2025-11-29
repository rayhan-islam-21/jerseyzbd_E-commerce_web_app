"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaCarAlt, FaShoppingBag, FaUser } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky md:p-2  top-0 z-50">
      <Container classname={"flex justify-between items-center bg-white py-4"}>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <IoMenu />
          </Button>
        </div>
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold md:font-extrabold">Jerseyz</h1>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex justify-between font-semibold items-center gap-8 text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="flex justify-between md:gap-2 items-center">
          <Button
            variant="ghost"
            className="hover:cursor-pointer flex flex-col relative"
            size="icon"
          >
            <FaShoppingBag  />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>

          <Button
            variant="ghost"
            className=" relative hover:cursor-pointer"
            size="icon"
          >
            <FaUser  />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
