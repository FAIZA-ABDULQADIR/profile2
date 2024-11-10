// components/SocialMediaIcons.js
import React from "react";
import Image from "next/image";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-6 mt-8 text-2xl">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 flex items-center"
      >
        <Image
          src="/facebook.webp" // Replace with your actual Facebook icon path in the public folder
          alt="Facebook"
          width={30}
          height={30}
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 flex items-center"
      >
        <Image
          src="/github.png" // Replace with your actual GitHub icon path in the public folder
          alt="GitHub"
          width={40}
          height={40}
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 flex items-center"
      >
        <Image
          src="/link.png" // Replace with your actual LinkedIn icon path in the public folder
          alt="LinkedIn"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
