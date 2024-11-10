"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white">
      <Navbar />
      {/* Contact Section */}
      <div className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-yellow-500 mb-8 text-center">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl">
          If you have any questions or would like to collaborate on a project, feel free to reach out. I'm always open to new opportunities and connections!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-8 bg-black bg-opacity-60 rounded-lg shadow-xl border-2 border-yellow-500"
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-xl font-semibold text-yellow-500 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-xl font-semibold text-yellow-500 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-xl font-semibold text-yellow-500 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-black text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message here"
              rows={6}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold text-lg rounded-md hover:bg-yellow-400 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 p-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com" className="text-yellow-500 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com" className="text-yellow-500 hover:underline">
            GitHub
          </a>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} Faiza | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Contact;
