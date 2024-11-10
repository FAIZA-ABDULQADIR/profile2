"use client";

import React from "react";
import Navbar from "../components/navbar";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white">
      <Navbar />

      {/* Header Section */}
      <section className="text-center py-16 animate-fadeIn">
        <h1 className="text-5xl font-bold text-yellow-500">Faiza's Resume</h1>
        <p className="text-xl text-gray-300 mt-4">Passionate UI/UX Developer | Frontend Enthusiast</p>
      </section>

      {/* Summary Section */}
      <section className="bg-black bg-opacity-60 p-8">
        <div className="max-w-4xl mx-auto text-center animate-slideIn">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">About Me</h2>
          <p className="text-lg text-gray-300">
          i am  an AI agent developer passionate about creating intelligent systems that enhance human-computer interaction. With a focus on machine learning and natural language processing, I'm dedicated to building AI-driven solutions that solve real-world problems. Constantly learning and experimenting with the latest AI technologies, I aim to push the boundaries of what's possible and contribute to the future of automation and intelligent systems.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto animate-slideIn">
          <h2 className="text-3xl font-semibold text-yellow-500 text-center mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Card 1 */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl text-yellow-500 font-semibold">UI/UX Designer | Tech Company</h3>
              <p className="text-sm text-gray-400 mt-1">Jan 2022 - Present</p>
              <p className="text-gray-300 mt-4">
                Worked closely with the product and engineering teams to design and implement intuitive user interfaces for web applications. Focused on improving user experiences, designing wireframes, and conducting user research to enhance usability.
              </p>
            </div>
            {/* Experience Card 2 */}
            <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl text-yellow-500 font-semibold">Frontend Developer | Web Solutions</h3>
              <p className="text-sm text-gray-400 mt-1">June 2020 - Dec 2021</p>
              <p className="text-gray-300 mt-4">
                Developed interactive and responsive websites using HTML, CSS, JavaScript, and React.js. Worked with the design team to implement UI elements, optimized websites for performance, and enhanced the accessibility of the user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-black bg-opacity-60 py-16 px-4">
        <div className="max-w-6xl mx-auto animate-slideIn">
          <h2 className="text-3xl font-semibold text-yellow-500 text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fab fa-react fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">React</p>
            </div>
            <div className="text-center">
              <i className="fab fa-html5 fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">HTML5</p>
            </div>
            <div className="text-center">
              <i className="fab fa-css3-alt fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">CSS3</p>
            </div>
            <div className="text-center">
              <i className="fab fa-js-square fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">JavaScript</p>
            </div>
            <div className="text-center">
              <i className="fab fa-tailwindcss fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">Tailwind CSS</p>
            </div>
            <div className="text-center">
              <i className="fab fa-node fa-3x text-yellow-500"></i>
              <p className="text-gray-300 mt-4">Node.js</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto animate-slideIn">
          <h2 className="text-3xl font-semibold text-yellow-500 text-center mb-8">Education</h2>
          <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-xl mb-4">
            <h3 className="text-xl text-yellow-500 font-semibold">Bachelor's in Computer Science | University X</h3>
            <p className="text-sm text-gray-400 mt-1">Sept 2016 - June 2020</p>
            <p className="text-gray-300 mt-4">
              Focused on web development, algorithms, data structures, and UI/UX principles. Graduated with honors.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-6 text-center">
        <div className="space-x-6">
          <a href="https://linkedin.com" className="text-yellow-500 hover:underline">LinkedIn</a>
          <a href="https://github.com" className="text-yellow-500 hover:underline">GitHub</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Faiza | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Resume;
