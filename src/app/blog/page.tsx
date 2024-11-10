// pages/blog.js
import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white">
      <Navbar />

      {/* Blog Content */}
      <div className="flex-grow p-8 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/nightsky.jpg')" }}>
        <div className="max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h1 className="text-5xl font-bold text-yellow-500 text-center mb-8">
            The Future of Technology: Shaping Tomorrow’s World
          </h1>

          {/* Image Container */}
          <div className="flex justify-center mb-8">
            <Image
              src="/blog.jpeg" // Replace with your actual image path in the public folder
              alt="Future of Technology"
              width={600}  // Set your desired width
              height={400} // Set your desired height
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Intro */}
          <p className="text-lg text-gray-300 mb-4 text-justify">
            As we step into the next decade, technology continues to evolve at a mind-bending pace, transforming nearly every aspect of life. From artificial intelligence and quantum computing to biotechnology and sustainable energy, the innovations on the horizon promise to reshape industries, enhance human capabilities, and address global challenges.
          </p>

          {/* Content Sections */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-yellow-500 mb-4">1. Artificial Intelligence and Machine Learning</h2>
              <p className="text-lg text-gray-300 text-justify">
                AI and machine learning are embedded in many of today’s systems, from recommendation engines to advanced medical diagnostics. In the future, AI will become more autonomous, moving from task-specific systems to general-purpose AI capable of handling complex scenarios and adapting to different fields.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-yellow-500 mb-4">2. Quantum Computing</h2>
              <p className="text-lg text-gray-300 text-justify">
                Quantum computing promises to unleash computational power far beyond current supercomputers by leveraging quantum mechanics principles. This revolutionary technology could solve complex problems in minutes that would take classical computers thousands of years.
              </p>
            </div>

            {/* Add remaining sections here following the same structure */}

            {/* Conclusion */}
            <div>
              <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Conclusion: A Technology-Driven Future</h2>
              <p className="text-lg text-gray-300 text-justify">
                The next decade promises to bring rapid advancements that were once only imaginable in science fiction. While each technology holds tremendous potential to address complex global problems, the challenges are equally significant. The future of technology will depend not only on scientific breakthroughs but also on our ability to create ethical, inclusive, and sustainable systems.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-4 text-center">
        © {new Date().getFullYear()} Faiza | Connect with me on{" "}
        <a href="https://linkedin.com" className="text-yellow-500 hover:underline">LinkedIn</a>,{" "}
        <a href="https://github.com" className="text-yellow-500 hover:underline">GitHub</a>
      </footer>
    </div>
  );
};

export default Blog;
