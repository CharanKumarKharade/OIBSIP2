import logo from "../Images/Logo.png";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="relative px-6 py-3 shadow-lg">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-50 animate-bg" />

      {/* Main Navbar Content */}
      <div className="relative flex justify-between items-center z-10">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 rounded-lg border-2 border-white shadow-md"
        />
        <h1
          className="font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl 
            bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500 
            shadow-lg shadow-black/50"
        >
          Charanz_codes
        </h1>

        <ul className="flex gap-6">
          <li>
            <a
              href="https://github.com/CharanKumarKharade"
              aria-label="GitHub Profile"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/charankumarkharade2003/"
              aria-label="LeetCode Profile"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <SiLeetcode size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/charan-kumar-kharade-s-b61208283"
              aria-label="LinkedIn Profile"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/charanz_rao?igsh=MTI0cmJ3MGt5amsxbA=="
              aria-label="Instagram Profile"
              className="text-white hover:text-gray-200 transition-colors duration-300"
            >
              <FaInstagramSquare size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
