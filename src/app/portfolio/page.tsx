"use client";

import React from 'react';
import Navbar from '../components/navbar'; // Ensure your Navbar is in the right path

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-black text-white p-8 relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Starry Sky Background */}
      <div className="absolute inset-0 z-0 stars"></div>

      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-200 mb-8">
          Welcome to my portfolio! Here, you can explore some of the projects I’ve worked on, showcasing my skills in UI/UX design, web development, and more.
        </p>
      </div>

      {/* Projects Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="/ecommerce.jpg" alt="Project 1" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Project 1: E-commerce Website</h3>
            <p className="text-lg mb-4">
              An e-commerce platform built with React and Tailwind CSS. This project features a fully responsive design and an intuitive user interface.
            </p>
            <a href="https://github.com/your-github-repo" target="_blank" className="text-yellow-500 hover:underline">
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="/port.jpg" alt="Project 2" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Project 2: Portfolio Website</h3>
            <p className="text-lg mb-4">
              My personal portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and blog posts.
            </p>
            <a href="https://github.com/your-github-repo" target="_blank" className="text-yellow-500 hover:underline">
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="/mobile.webp" alt="Project 3" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Project 3: Mobile App Design</h3>
            <p className="text-lg mb-4">
              A mobile app design with an emphasis on user experience and accessibility. The app was built using Figma and Adobe XD.
            </p>
            <a href="https://dribbble.com/your-dribbble-repo" target="_blank" className="text-yellow-500 hover:underline">
              View Design on Dribbble
            </a>
          </div>
        </div>
      </div>

      
    
    </div>
  );
};

export default Portfolio;
