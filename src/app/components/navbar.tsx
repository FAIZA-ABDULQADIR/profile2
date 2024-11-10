import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-3">
        <Image src="/logo0.jpg" alt="Logo" width={40} height={40} className="mr-2 opacity-90" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-yellow-500">FAIZA</span>
          <span className="text-sm text-gray-300">UI/UX Aspiring Developer</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6 text-white">
        <Link href="/" className="hover:text-yellow-500">Home</Link>
        <Link href="/about" className="hover:text-yellow-500">About</Link> {/* Corrected Link to /about */}
        <Link href="/resume" className="hover:text-yellow-500">Resume</Link>
        <Link href="/portfolio" className="hover:text-yellow-500">Portfolio</Link>
        <Link href="/blog" className="hover:text-yellow-500">Blog</Link>
        <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
      </nav>

      {/* Phone number visibility on all screen sizes */}
      <div className="hidden md:block text-yellow-500">+92-123456789</div>
    </header>
  );
};

export default Navbar;
