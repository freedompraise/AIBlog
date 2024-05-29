import React from "react";

const Contact = () => {
  document.title = `Contact - Elite AI Blog`;

  return (
    <div className="container mx-auto px-4 bg-white text-black text-center overflow-auto mb-2">
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Contact Us</h1>
      <img className="w-full p-8" src="/contact.jpeg" alt="Contact Us" />

      <div
        id="form"
        className="flex justify-center items-center my-4"
        style={{ minHeight: "calc(100vh - 200px)" }} // Adjust the height as needed
      >
        <div className="p-4">
          <h2 className="text-3xl mt-4 font-bold">Let's Connect!</h2>

          <form className="mt-4 text-black">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-white p-2 border border-gray-300 rounded focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-white p-2 border border-gray-300 rounded focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full h-56 bg-white p-2 border border-gray-300 rounded focus:border-indigo-500"
              id="message"
              name="message"
              required
            ></textarea>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-4 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
