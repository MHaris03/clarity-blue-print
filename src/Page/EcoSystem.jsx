import React from "react";
import ecosystemImg from "../assets/eco.png";
import { motion } from "framer-motion";

const PlatformEcosystem = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const leftCards = [
    { title: "Clarity Life", desc: "Personal alignment and relationships" },
    { title: "Clarity Pro", desc: "Entrepreneurs and professionals" },
  ];

  const rightCards = [
    { title: "Clarity Enterprise", desc: "Leadership teams and organizations" },
    { title: "Clarity Community", desc: "Government programs and nonprofits" },
  ];

  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          The Clarity <span className="text-[#1455c0]">Platform</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-20"
        >
          The future of the Clarity Blueprint System. A connected platform
          supporting individuals, professionals, organizations, and communities.
        </motion.p>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-10">
            {leftCards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:border-[#1455c0] transition"
              >
                <h3 className="text-xl font-semibold text-[#1455c0] mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="absolute w-[520px] h-[520px] bg-[#1455c0]/20 blur-[140px] rounded-full"></div>
            <img
              src={ecosystemImg}
              alt="Clarity Blueprint Ecosystem"
              className="relative w-[480px] md:w-[720px] lg:w-[600px] rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* Right Column */}
          <div className="space-y-10">
            {rightCards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:border-[#1455c0] transition"
              >
                <h3 className="text-xl font-semibold text-[#1455c0] mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;