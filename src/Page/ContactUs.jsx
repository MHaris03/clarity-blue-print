import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const services = [
    "Clarity Operating System™",
    "Professional Alignment System™",
    "Relational Architecture™",
    "Clarity AI™",
    "Executive Alignment Session™"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-gray-900 rounded-3xl p-10 border border-gray-800 shadow-xl"
      >
        <h2 className="text-4xl font-bold text-[#1455c0] mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Fill out the form below and select the service you’re interested in. We’ll get back to you promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1455c0] placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1455c0] placeholder-gray-500"
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-gray-300 mb-2">
              Select a Service
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1455c0] placeholder-gray-500"
            >
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((service, i) => (
                <option key={i} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1455c0] placeholder-gray-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-[#1455c0] hover:bg-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-[#1455c0]/50 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;