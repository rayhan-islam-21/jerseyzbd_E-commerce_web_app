"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-3xl font-extrabold text-blue-600 dark:text-teal-400">
                JerseyzBD
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <div className="flex space-x-5 pt-2">
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110"
            >
             <FaFacebook size={22} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-teal-400 transition-transform transform hover:scale-110"
            >
              <BsInstagram size={22} />
            </Link>
          
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors duration-300"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Matikata Road,Dhaka Cantonment.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: info@jerseyzbd.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Phone: +880 1989-726823
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <p className="mt-1">
          Designed with <span className="text-red-500">&hearts;</span> by Your
          Company
        </p>
      </div>
    </footer>
  );
};
export default Footer;
