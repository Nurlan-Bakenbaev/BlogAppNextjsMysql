"use client"
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MySite</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} `}>
          <Link href="/userposts" className="block py-2 px-4 hover:bg-gray-700">
            My Posts
          </Link>
          <Link href="/write" className="block py-2 px-4 hover:bg-gray-700">
            Write
          </Link>
          <Link href="/login" className="block py-2 px-4 hover:bg-gray-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
