import profileImage from "../Images/Logo1.png"; // Add your image path here

const About = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between min-h-screen p-6 lg:p-12 bg-gray-100"
    >
      <div className="flex-shrink-0 lg:w-1/3 mb-8 lg:mb-0 lg:mr-12">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 sm:ml-[23%] mt-20 shadow-lg lg:w-48 lg:h-48 object-cover rounded-full border-4 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        />
      </div>

      <div className="lg:w-2/3">
        <h2 className="text-2xl lg:text-3xl font-bold mt-4 text-center lg:text-left">
          About Me
        </h2>
        <h4 className="text-xl lg:text-2xl font-semibold text-center lg:text-left mt-2">
          Hi, I'm Charan Kumar Kharade S
        </h4>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
          I'm an intermediate web developer with knowledge in ReactJS, Java,
          HTML, CSS, and Vercel for deployment. With a strong foundation in
          building scalable and efficient websites, I'm passionate about
          creating seamless UX. Additionally, I have hands-on experience with
          Java core projects, demonstrating my ability to work with robust
          programming languages. I'm always looking to expand my skills and
          explore new technologies to stay ahead in the ever-evolving
          development landscape. Let's connect and build something amazing
          together! I'm a quick learner, eager to acquire new knowledge about
          trends and apply the same.
        </p>
      </div>
    </div>
  );
};

export default About;
