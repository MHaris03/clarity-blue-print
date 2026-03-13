import React from 'react';
import Transformimg from "../assets/transform.png";
import { motion } from "framer-motion";

const Transformation = () => {

  // Stagger animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  const cards = [
    { title: "Make Decisions", desc: "Make clear, confident decisions without second-guessing." },
    { title: "Communicate", desc: "Express ideas clearly and communicate with confidence." },
    { title: "Manage Energy", desc: "Use your energy wisely to stay focused and productive." },
    { title: "Navigate Relationships", desc: "Build stronger and healthier personal and work relationships." },
    { title: "Align Your Work and Life", desc: "Bring your goals, work, and life into alignment." },
  ];

  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Content */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The Clarity <span className="text-[#1455c0]">Blueprint System</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            The Clarity Blueprint System translates your Human Design
            architecture into a practical framework for how you are designed to.
          </p>
        </motion.div>

        {/* Image + Cards Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={Transformimg}
              alt="focused-professional-working-with-clarity"
              className="rounded-3xl shadow-2xl object-cover w-full"
            />
          </motion.div>

          {/* Cards */}
          <div className="space-y-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#1455c0] transition"
              >
                <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Transformation;