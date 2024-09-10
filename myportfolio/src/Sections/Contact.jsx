const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gray-50 min-h-screen py-16 px-4 md:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Get in Touch
      </h2>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Charan"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="charan@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              cols="6"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-medium">Charan Kumar Kharade</p>
          <p className="text-sm mt-2">
            Web Developer | Java Developer | AI/ML Enthusiast
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
