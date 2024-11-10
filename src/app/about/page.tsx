

import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-black text-white p-8 relative overflow-hidden">
      <Navbar />
      {/* Starry Sky Background */}
      <div className="absolute inset-0 z-0 bg-[url('/path-to-your-starry-background.png')] bg-cover bg-fixed"></div>
     

      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4 animate-fadeIn">About Me</h1>
        <p className="text-lg text-gray-200 animate-slideIn">
          I'm Faiza, a UI/UX aspiring developer passionate about design, front-end development, and creating amazing user experiences.
        </p>
      </div>

      {/* Blog Post Section (Glassmorphism) */}
      <div className="backdrop-blur-lg bg-black bg-opacity-50 max-w-3xl mx-auto rounded-lg shadow-xl p-8 mb-8 relative z-10 animate-slideIn">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6">My Journey in UI/UX</h2>
        <p className="text-lg mb-4">
          As a passionate learner and aspiring UI/UX developer, my journey began when I realized the power of design to change the world.
          It started with my fascination with how people interact with technology. I wanted to make those interactions seamless and enjoyable.
        </p>
        <p className="text-lg mb-4">
          I started my learning path by experimenting with different design tools like Figma and Adobe XD. I also began to dive deep into the principles of user-centered design, focusing on accessibility, usability, and aesthetic value. I realized that a good user interface is not just about making things look good; it's about creating a smooth and intuitive experience.
        </p>
        <p className="text-lg mb-4">
          Through various projects, I learned the importance of combining both aesthetics and functionality. I worked on redesigning websites and creating mockups for mobile applications. One of my most exciting projects involved creating an intuitive onboarding experience for a local startup's mobile app, which significantly improved user engagement.
        </p>
        <p className="text-lg mb-4">
          As I continue to grow in this field, I’m driven by the idea of creating designs that not only look good but also enhance the user's interaction with technology. I aim to combine my creativity with technical skills to build products that users love to engage with.
        </p>
        <p className="text-lg">
          If you're interested in collaborating on a project, feel free to reach out. I'd love to bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
