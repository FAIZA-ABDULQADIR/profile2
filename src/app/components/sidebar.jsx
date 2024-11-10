import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white p-4 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed inset-0 md:left-0 top-0 bg-black bg-opacity-75 z-40 md:w-64 w-full p-4`}
      >
        <div className="text-white space-y-8">
          <div className="text-xl font-bold mb-6">My Portfolio</div>
          <div className="space-y-4">
            <Link href="/" passHref>
              <a
                className={`${
                  router.pathname === "/" ? "text-yellow-500" : "text-white"
                } hover:text-yellow-500`}
              >
                Home
              </a>
            </Link>
            <Link href="/about" passHref>
              <a
                className={`${
                  router.pathname === "/about" ? "text-yellow-500" : "text-white"
                } hover:text-yellow-500`}
              >
                About
              </a>
            </Link>
            <Link href="/projects" passHref>
              <a
                className={`${
                  router.pathname === "/projects" ? "text-yellow-500" : "text-white"
                } hover:text-yellow-500`}
              >
                Projects
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a
                className={`${
                  router.pathname === "/contact" ? "text-yellow-500" : "text-white"
                } hover:text-yellow-500`}
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
