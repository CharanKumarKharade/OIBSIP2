import { FaReact, FaDatabase } from "react-icons/fa"; // React, Database
import { FaJava } from "react-icons/fa6";
import { SiTailwindcss, SiIntellijidea } from "react-icons/si"; // Tailwind CSS, Java, IntelliJ IDEA
import { IoMdCloud } from "react-icons/io"; // Cloud icon for Firebase

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gray-100 min-h-screen py-16 px-6 mx-auto max-w-7xl"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Projects
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h3 className="text-3xl text-center font-semibold text-green-600 mb-6">
          AuraSarees
        </h3>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
          <li>
            Fully interactive and responsive website built using ReactJS and
            Firebase.
          </li>
          <li>
            A platform that allows businesses to sell products and services
            directly to customers.
          </li>
          <li>
            Used Firebase tools to streamline web development, including
            Firestore RealTime Database.
          </li>
          <li>
            Provides a convenient and accessible way for businesses to reach
            customers, increase sales, and expand their market reach.
          </li>
          <li>Online payment methods integrated with RazorPay.</li>
        </ul>
        <div className="border-t border-gray-300 pt-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <FaReact className="text-blue-600 text-4xl" />
              <span className="text-lg text-gray-700">
                ReactJS - Front-End Development
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <SiTailwindcss className="text-blue-500 text-4xl" />
              <span className="text-lg text-gray-700">
                Tailwind CSS - Styling
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <IoMdCloud className="text-yellow-500 text-4xl" />
              <span className="text-lg text-gray-700">
                Firebase - Backend Auth and Development
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDatabase className="text-green-500 text-4xl" />
              <span className="text-lg text-gray-700">
                Firestore - RealTime Database
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <IoMdCloud className="text-black text-4xl" />
              <span className="text-lg text-gray-700">Vercel - Deployment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-3xl text-center font-semibold text-blue-600 mb-6">
          Multi-Cuisine Restaurant Management System
        </h3>

        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
          <li>
            A comprehensive restaurant management system that handles data and
            transaction receipts.
          </li>
          <li>Automates managerial activities of the restaurant.</li>
          <li>Effortlessly maintains item details and inventory.</li>
        </ul>
        <div className="border-t border-gray-300 pt-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <FaJava className="text-red-600 text-4xl" />
              <span className="text-lg text-gray-700">
                Core Java - Programming
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <SiIntellijidea className="text-black text-4xl" />
              <span className="text-lg text-gray-700">
                IntelliJ - Editor (IDE)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
