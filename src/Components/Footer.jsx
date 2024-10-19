import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Portfolio Section */}
        <motion.div
          className="mb-4 p-6 w-full md:w-1/2 flex items-center ml-[8rem]" // Made width 1/2 for equal size
          initial={{ opacity: 0, x: -50 }} // Initial state
          animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animation state based on scroll
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://github.com/shivaniverma2002.png" // GitHub profile image URL
            alt="Shivani Verma"
            className="rounded-full w-32 h-32 mr-6" // Adjust size and margin as needed
          />
          <div className="flex flex-col">
            <h1 className="text-bold text-4xl text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text mb-2">
              SHIVANI VERMA
            </h1>
            <h2 className="text-xl font-semibold">My Portfolio</h2>
            <p className="text-gray-400 mt-2">React Developer</p>
            <p className="text-gray-400">
              Contact: shivaniverma370469@gmail.com
            </p>
            <p className="text-gray-400">Location: Jhansi, 284002</p>
          </div>
        </motion.div>

        {/* Social Icons Section */}
        <motion.div
          className="p-6 w-full md:w-1/2 flex flex-col items-start" // Made width 1/2 for equal size
          initial={{ opacity: 0, x: 50 }} // Initial state
          animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animation state based on scroll
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text">
            Important Links
          </h2>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.linkedin.com/in/shivani-verma-aa5904218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-500 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/shivaniverma2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-pink-500 transition-colors duration-300"
            >
              <FaGithub size={30} />
              <span>GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/shivaniverma370469/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
            >
              <FaCode size={30} />
              <span>LeetCode</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
