import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import hero from "../assets/img1.png";

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] h-full mx-auto py-12 justify-center items-center overflow-hidden bg-black">
      {/* Black Background with Animated Noise Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-noise w-full h-full"></div>
      </div>

      {/* Left Section with Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="col-span-1 my-auto mx-auto justify-center items-center relative z-10"
      >
        <div className="w-[400px] h-[320px] lg:w-[300px] p-3 border-2 border-[#f9a8d4] rounded-full shadow-lg shadow-[#f9a8d4] transition duration-300 hover:scale-105">
          <img
            src={hero}
            className="mt-2 h-[250px] rounded-full object-cover"
            alt="heroimg"
          />
        </div>
      </motion.div>

      {/* Right Section with Motion */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="col-span-1 px-5 my-auto justify-center items-center relative z-10"
      >
        <h1 className="text-white text-4xl sm:text-7xl lg:text-4xl font-extrabold tracking-tight leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 text-2xl block">
            I'm a
          </span>
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web Designer",
              1000,
              "Problem Solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 inline-block mt-2"
          />
        </h1>

        <p className="text-gray-300 sm:text-lg my-6 lg:text-xl">
          My name is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-semibold">
            Anjali Gupta
          </span>
          . I am keen to learn new skills and enjoy my work.
        </p>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://drive.google.com/file/d/1D6f9maRnVkzOSTNAkoxNOj5FvDmUl1KM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-tr from-yellow-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:from-pink-500 hover:to-yellow-500"
          >
            Resume
          </a>

          <a
            href="#email"
            className="px-6 py-3 border border-[#f472b6] text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-tr from-yellow-500 to-pink-500 hover:border-none"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
