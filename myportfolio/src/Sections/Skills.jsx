import {
  FaReact,
  FaJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-gray-100 p-6 lg:p-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">My Skills</h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Here are some of the skills and technologies I have experience with.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaReact size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">React</h3>
          <p className="text-gray-600 text-center">
            Building interactive UIs with React.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaJs size={48} className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
          <p className="text-gray-600 text-center">
            Mastering the core language for web development.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaJava size={48} className="text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Java</h3>
          <p className="text-gray-600 text-center">
            Developing robust backend applications with Java.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHtml5 size={48} className="text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">HTML</h3>
          <p className="text-gray-600 text-center">
            Structuring web content with HTML.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaCss3Alt size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">CSS</h3>
          <p className="text-gray-600 text-center">
            Styling and designing websites with CSS.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <SiTailwindcss size={48} className="text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
          <p className="text-gray-600 text-center">
            Creating responsive designs with Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <SiVercel size={48} className="text-black mb-4" />
          <h3 className="text-xl font-semibold mb-2">Vercel</h3>
          <p className="text-gray-600 text-center">
            Deploying applications easily with Vercel.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <SiTypescript size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
          <p className="text-gray-600 text-center">
            Adding type safety to JavaScript with TypeScript.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaGithub size={48} className="text-gray-800 mb-4" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <p className="text-gray-600 text-center">
            Version control and collaboration with GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
