import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent mb-6">
            About Clarity
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Clarity is structure. We believe most people are not incapable they are misaligned. Our mission is to provide structured, practical alignment systems that help individuals, professionals, and organizations operate with confidence, precision, and sustainability.
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1455c0] mb-8 text-center">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
          We don’t offer motivation. We build operating systems. In a world full of noise, pressure, and conflicting advice, Clarity exists to help you perform at your best without burnout, second-guessing, or friction.
        </p>
      </div>

      {/* What We Do */}
      <div className="bg-[#0f0f0f] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1455c0] mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Clarity Operating System™",
                desc: "A personalized decision and energy framework serving as your foundation for life and work alignment."
              },
              {
                title: "Professional Alignment System™",
                desc: "Career and income architecture for professionals, executives, and business owners seeking strategic clarity."
              },
              {
                title: "Relational Architecture™",
                desc: "A structured relationship framework designed to improve communication, reduce conflict, and strengthen connections."
              },
              {
                title: "Clarity AI™",
                desc: "An ongoing strategic decision engine that supports real-time clarity based on your personalized system."
              },
              {
                title: "Executive Alignment Session™",
                desc: "Private intensives for high-stakes decisions and leadership-level clarity."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/20 backdrop-blur-md p-8 rounded-3xl border border-gray-800 transition shadow-lg hover:shadow-[#1455c0]/30"
              >
                <h3 className="text-xl font-semibold text-[#1455c0] mb-3">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Serve */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1455c0] mb-12">Who We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-300">
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Individuals & Families<br/>
            Seeking direction, relationship clarity, and parenting alignment.
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Professionals & Leaders<br/>
            Optimizing performance, decision-making, and sustainable growth.
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Organizations & Institutions<br/>
            Improving workforce alignment, leadership effectiveness, and long-term performance.
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-[#0f0f0f] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1455c0] mb-8">Our Philosophy</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            Clarity is not inspiration. It is infrastructure. When you understand how you are built to decide, lead, connect, and grow—confidence becomes natural. Performance becomes sustainable. Relationships become stable.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We believe clarity should be structured, actionable, scalable, measurable, practical, and accessible at every level—from personal life to enterprise leadership.
          </p>
        </div>
      </div>

      {/* Future of Clarity */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1455c0] mb-12 text-center">The Future of Clarity</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300 text-lg">
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Clarity Life™
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Clarity Pro™
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-[#1455c0]/20 transition">
            Clarity Enterprise™
          </div>
        </div>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-6 text-center">
          With Clarity AI™, our vision is to provide continuous alignment support—because clarity isn’t a moment, it’s an advantage.
        </p>
      </div>

    </section>
  );
};

export default AboutPage;