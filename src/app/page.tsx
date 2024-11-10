// pages/index.js
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "../app/components/herosection";


export default function Home() {
  return (
    <div 
      className="h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="h-full bg-black bg-opacity-50">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex justify-center items-center h-[calc(100%-5rem)]">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
