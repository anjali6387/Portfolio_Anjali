import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import about from "../assets/img2.png";

const About = () => {
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
    <div className="relative overflow-hidden" id="about">
      <div className="text-white mx-auto my-12 max-w-[1200px] relative z-10">
        <div className="md:grid md:grid-cols-2 sm:py-16">
          <div className="mt-4 md:mt-0 text-left flex">
            <div className="my-auto mx-6">
              <motion.h2
                className="text-4xl font-bold mb-4 primary-color"
                initial={{ y: 20, opacity: 0 }} // Initial state
                animate={show ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }} // Animation state
                transition={{ duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h2>
              <motion.p
                className="lg:text-lg"
                initial={{ y: 20, opacity: 0 }} // Initial state
                animate={show ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }} // Animation state
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                A frontend developer is the backbone of a website's user
                experience, combining technical prowess with creative design
                skills. They translate complex backend data into visually
                appealing and intuitive interfaces that users interact with
                daily. Strong in HTML, CSS, and JavaScript, they ensure that
                websites are not only functional but also responsive,
                accessible, and optimized for performance across all devices.
                Their keen eye for detail allows them to seamlessly integrate
                aesthetics with usability, ensuring that users have a smooth and
                engaging experience. In addition to technical skills, they excel
                in problem-solving, adapting to the fast-paced evolution of web
                technologies. With the ability to work closely with designers
                and backend developers, frontend developers are essential in
                bridging the gap between concept and reality, turning innovative
                ideas into fully functional, user-friendly websites and
                applications.
              </motion.p>
            </div>
          </div>
          <motion.img
            src={about}
            className="mx-auto rounded-3xl py-10 border-2 border-[#67e8f9] md:py-4"
            alt=""
            width={300}
            height={300}
            initial={{ x: 50, opacity: 0 }} // Initial state
            animate={show ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} // Animation state
            transition={{ duration: 0.5, delay: 0.2 }} // Transition for scale animation
          />
        </div>
      </div>

      {/* Bubble Animation */}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: bubble 5s infinite;
        }

        /* Bubbles with various colors and positions */
        .bubble:nth-child(1) {
          width: 100px;
          height: 100px;
          left: 10%;
          top: 50%;
          background: rgba(255, 165, 0, 0.7); /* Orange */
          animation-delay: 0s;
        }

        .bubble:nth-child(2) {
          width: 120px;
          height: 120px;
          left: 30%;
          top: 70%;
          background: rgba(255, 192, 203, 0.7); /* Pink */
          animation-delay: 1s;
        }

        .bubble:nth-child(3) {
          width: 80px;
          height: 80px;
          left: 60%;
          top: 30%;
          background: rgba(255, 255, 0, 0.7); /* Yellow */
          animation-delay: 2s;
        }

        .bubble:nth-child(4) {
          width: 90px;
          height: 90px;
          left: 80%;
          top: 60%;
          background: rgba(0, 191, 255, 0.7); /* Sky Blue */
          animation-delay: 3s;
        }

        .bubble:nth-child(5) {
          width: 110px;
          height: 110px;
          left: 20%;
          top: 20%;
          background: rgba(144, 238, 144, 0.7); /* Light Green */
          animation-delay: 4s;
        }

        .bubble:nth-child(6) {
          width: 130px;
          height: 130px;
          left: 40%;
          top: 10%;
          background: rgba(0, 0, 255, 0.7); /* Blue */
          animation-delay: 5s;
        }

        .bubble:nth-child(7) {
          width: 150px;
          height: 150px;
          left: 15%;
          top: 80%;
          background: rgba(0, 255, 127, 0.7); /* Random Green */
          animation-delay: 6s;
        }

        .bubble:nth-child(8) {
          width: 90px;
          height: 90px;
          left: 75%;
          top: 40%;
          background: rgba(75, 0, 130, 0.7); /* Indigo */
          animation-delay: 7s;
        }
      `}</style>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
};

export default About;
