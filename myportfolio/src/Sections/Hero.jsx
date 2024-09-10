import About from "./About";
const Hero = () => {
  const aboutDisplay = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12 px-6">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h4>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
          This is my personal portfolio, where I showcase my coding skills and
          projects.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#aboutus">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            About Me
          </button>
        </a>
        <a href="#skills" label="skills">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            Skills
          </button>
        </a>
        <a href="#internship">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            Internship
          </button>
        </a>
        <a href="#resume">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            Resume
          </button>
        </a>
        <a href="#projects">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            Projects
          </button>
        </a>
        <a href="#contact">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
            Contact
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
