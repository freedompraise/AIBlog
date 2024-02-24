import React from "react";
const Contact = () => {
    document.title = `Contact - Elite AI Blog`;

    return (
        <div className="container mx-auto px-4 bg-white text-black text-center overflow-auto mb-2"
        >
            <h1 className="text-3xl font-bold text-center mt-6 mb-4">Contact Us</h1>
            <img className="w-full" src="/contact.jpeg" alt="Contact Us" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg p-4">

                    <h2 className="text-2xl font-bold">Let's Connect!</h2>

                  <form className="mt-4 text-black ">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input className="w-full bg-white p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
                    <label className="block mt-4 mb-2" htmlFor="email">Email</label>
                    <input className="w-full bg-white p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
                    <label className="block mt-4 mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full h-56 bg-white p-2 border border-gray-300 rounded" id="message" name="message" required></textarea>
                    <button className="w-full bg-indigo-700 hover:bg-indigo-600 text-white p-2 mt-4 rounded-md" type="submit">Send</button>

                    </form>
                        
                </div>
                </div>


        </div>
    );
    }

export default Contact;