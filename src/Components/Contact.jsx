import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down to a specific point
      if (window.scrollY > 200) {
        // Adjust the scroll threshold as needed
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
    <div className="flex items-center justify-center min-h-screen">
      <motion.form
        className="w-full max-w-md bg-gray-900 shadow-md rounded-lg p-8"
        initial={{ opacity: 0, y: -50 }} // Initial state
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animation state based on scroll
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h2>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-gray-900 border rounded-lg text-white focus:outline-none focus:border-pink-500"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-white focus:outline-none focus:border-pink-500"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-3 py-2 border rounded-lg bg-gray-900 text-white focus:outline-none focus:border-pink-500"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-yellow-400 to-pink-500 text-2xl text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
