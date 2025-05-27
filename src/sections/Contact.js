import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-cyan-400 pb-2">Contact Me</h2>
      
      <form
        className="w-full max-w-lg bg-[#1e293b] p-8 rounded-2xl shadow-xl"
        action="https://formspree.io/f/yourFormID" // <-- Replace with your Formspree ID
        method="POST"
      >
        <div className="mb-6">
          <label className="block text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-cyan-400 text-white focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-cyan-400 text-white focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-cyan-400 text-white focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
