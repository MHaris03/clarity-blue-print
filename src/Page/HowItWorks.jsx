import React from "react";
import blueprintImg from "../assets/worksystem.png";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const steps = [
    {
      title: "Discover Your Blueprint",
      desc: "Understand your natural decision-making style and personal strategy.",
    },
    {
      title: "Get Your Personal Framework",
      desc: "Receive a structured system to guide choices in work, life, and leadership.",
    },
    {
      title: "Use the AI Clarity Coach",
      desc: "Get ongoing insights and guidance to apply your blueprint daily.",
    },
    {
      title: "Make Aligned Decisions",
      desc: "Move forward with clarity, confidence, and a strategy that fits you.",
    },
  ];

  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How the <span className="text-[#1455c0]">Clarity Blueprint System</span> Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 mb-10"
          >
            A structured process that helps you understand how you think, make decisions,
            and create a strategy that aligns with your natural design.
          </motion.p>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepVariants}
                className="flex gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <img
            src={blueprintImg}
            alt="Clarity Blueprint System"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}