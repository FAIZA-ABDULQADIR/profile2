// components/HeroSection.js
import React from "react";
import SocialMediaIcons from "./socialmedia"; // Import the SocialMediaIcons component

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full text-white">
      <h1 className="text-5xl font-bold">
        Hi, I am <span className="text-yellow-500">FAIZA</span>
      </h1>
      <p className="mt-4 text-lg max-w-lg">
        I am a frontend web developer. I can provide clean code and pixel-perfect design.
        <br />
        I also make websites more interactive with web animations.
      </p>
      
      {/* Social Media Icons */}
      <SocialMediaIcons />
    </div>
  );
};

export default HeroSection;
