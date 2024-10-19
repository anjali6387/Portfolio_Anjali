import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import proj1 from "../assets/ecommerce.jpg";
import proj2 from "../assets/cognifyz.jpg";
import proj3 from "../assets/Travel.jpg";
import proj4 from "../assets/gallery.jpg";

const projects = [
  {
    img: proj1,
    liveLink: "https://ecommerce-sho-starter.web.app/",
  },
  {
    img: proj2,
    liveLink: "https://shivaniverma2002.github.io/proj-6/",
  },
  {
    img: proj3,
    liveLink: "https://shivaniverma2002.github.io/proj-4/",
  },
  {
    img: proj4,
    liveLink: "https://shivaniverma2002.github.io/proj-5/",
  },
];

const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8 text-center">
        <p className="text-4xl mb-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
          Projects
        </p>
        <p className="text-gray-400">Check out My Projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }} // Initial position and opacity
            animate={{ x: 0, opacity: 1 }} // Final position and opacity
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
            className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[300px] bg-cover relative"
          >
            <img
              src={project.img}
              className="w-full h-full object-cover"
              alt={`Project ${index + 1}`}
            />
            <div className="opacity-0 group-hover:opacity-90 bg-[black]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 tracking-wider">
                Project
              </span>
              <div className="pt-8 text-center">
                <a href={project.liveLink}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold text-2xl transition duration-300 opacity-80 group-hover:opacity-100">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
