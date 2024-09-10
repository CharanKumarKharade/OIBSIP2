const Internship = () => {
  return (
    <div
      id="internship"
      className="container mx-auto p-8 bg-gray-100 min-h-screen"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-center p-6">
          <h1 className="text-4xl font-bold">Internship Experience</h1>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-2">
            Lueur Tech Software Solutions
          </h2>
          <p className="mb-4 text-gray-600">Full Stack Web Developer Intern</p>
          <p className="mb-4 text-gray-600">Duration: 3 months</p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Technologies Learned:
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li className="bg-blue-100 p-4 rounded-lg shadow-md">ReactJS</li>
              <li className="bg-blue-100 p-4 rounded-lg shadow-md">
                Tailwind CSS
              </li>
              <li className="bg-blue-100 p-4 rounded-lg shadow-md">
                Spring Boot
              </li>

              <li className="bg-blue-100 p-4 rounded-lg shadow-md">Node.js</li>

              <li className="bg-blue-100 p-4 rounded-lg shadow-md">MySQL</li>
              <li className="bg-blue-100 p-4 rounded-lg shadow-md">Vercel</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Projects Implemented:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">
                  Static Banking Website
                </h4>
                <p className="text-gray-700">
                  Developed a static banking website with a modern user
                  interface to showcase banking functionalities.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">
                  Restaurant Management System
                </h4>
                <p className="text-gray-700">
                  Built a restaurant management system to handle reservations,
                  orders, and customer management efficiently.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-700">
              During my internship at Lueur Tech Software Solutions, I had the
              opportunity to work on a range of projects and technologies. I
              gained hands-on experience in building full-stack web applications
              using modern technologies. My key contributions included
              implementing a static banking website and developing a restaurant
              management system, which enhanced my skills in front-end and
              back-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
