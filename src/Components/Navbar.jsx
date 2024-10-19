import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent ml-4">
        Shivani Verma
      </h1>
      <ul className="hidden md:flex">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item} className="p-5 relative group">
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="font-semibold hover:text-yellow-500 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className="absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 w-0 group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {Nav ? (
          <AiOutlineClose size={20} className="text-2xl text-white" />
        ) : (
          <AiOutlineMenu size={20} className="text-2xl text-white" />
        )}
      </div>
      <div
        className={
          Nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent m-4">
          Shivani Verma
        </h1>
        <ul className="p-8 text-2xl">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="p-2 relative group">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="font-semibold hover:text-yellow-500 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              <span className="absolute left-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 w-0 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
