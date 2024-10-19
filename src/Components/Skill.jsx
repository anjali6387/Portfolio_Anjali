import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiNestjs,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const ref = useRef(null); // Create a ref for the section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the section is in view
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    });

    const currentRef = ref.current; // Copy ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef); // Observe the section
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div
      ref={ref} // Attach the ref to the section
      className="text-gray-400 md:h-auto max-w-[1200px] mx-auto flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 text-center">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Skills */}
        {[
          {
            icon: <FaHtml5 className="text-red-500 text-6xl md:text-7xl" />,
            label: "HTML",
          },
          {
            icon: <FaCss3Alt className="text-blue-500 text-6xl md:text-7xl" />,
            label: "CSS",
          },
          {
            icon: <FaJs className="text-yellow-500 text-6xl md:text-7xl" />,
            label: "JavaScript",
          },
          {
            icon: <FaReact className="text-cyan-400 text-6xl md:text-7xl" />,
            label: "React",
          },
          {
            icon: (
              <SiTailwindcss className="text-blue-400 text-6xl md:text-7xl" />
            ),
            label: "Tailwind CSS",
          },
          {
            icon: (
              <SiCplusplus className="text-blue-600 text-6xl md:text-7xl" />
            ),
            label: "C++",
          },
          {
            icon: <FaNodeJs className="text-green-500 text-6xl md:text-7xl" />,
            label: "Node.js",
          },
          {
            icon: <SiNestjs className="text-red-600 text-6xl md:text-7xl" />,
            label: "NestJS",
          },
          {
            icon: <SiMongodb className="text-green-600 text-6xl md:text-7xl" />,
            label: "MongoDB",
          },
          {
            icon: (
              <SiPostman className="text-orange-500 text-6xl md:text-7xl" />
            ),
            label: "Postman",
          },
          {
            icon: <FaGithub className="text-gray-600 text-6xl md:text-7xl" />,
            label: "GitHub",
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }} // Initial state: hidden and moved up
            animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate only when isVisible is true
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay each icon slightly for a staggered effect
            className="flex flex-col items-center m-4 w-[60px] md:w-[80px]"
          >
            <div className="flex items-center justify-center mb-2">
              {skill.icon}
            </div>
            <p className="text-center text-sm">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
