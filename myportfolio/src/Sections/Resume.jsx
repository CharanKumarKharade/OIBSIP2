import resume from "../Images/Resume.pdf";

const Resume = () => {
  return (
    <div
      id="resume"
      className="flex items-center justify-center min-h-[20px] bg-gray-100 p-3"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 transition-transform duration-500 hover:scale-105">
          Download My Resume
        </h1>
        <p className="text-gray-700 text-center mb-6">
          I’ve prepared a detailed resume outlining my skills, experience, and
          achievements. You can download it using the link below:
        </p>
        <div className="flex justify-center">
          <a
            href={resume}
            download="Charan_resume.pdf"
            className="inline-block px-8 py-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform transform-gpu hover:scale-105 duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
