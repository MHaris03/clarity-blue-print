import React from "react";
import jounreyImg from "../assets/journey.png";
import { motion } from "framer-motion";

const HowWorks = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const steps = [
    {
      number: "01",
      title: "Generate Blueprint",
      desc: "Identify hidden problems and strategic bottlenecks.",
    },
    {
      number: "02",
      title: "Receive PDF",
      desc: "Get your personalized strategy blueprint.",
    },
    {
      number: "03",
      title: "Activate AI Coach",
      desc: "Use AI guidance to execute with clarity.",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Your <span className="text-[#1455c0]">Clarity Journey</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-14"
        >
          A simple system designed to turn confusion into clarity.
          In just three steps, you uncover hidden problems, receive a clear strategic plan,
          and activate an AI-powered guide to help you move forward with confidence.
        </motion.p>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-20"
        >
          <img
            src={jounreyImg}
            alt="Clarity Blueprint Process"
            className="max-w-3xl w-full rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stepVariants}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-5xl font-bold text-[#1455c0] relative">
                  {step.number}
                  <span className="absolute inset-0 w-full h-full rounded-full bg-[#1455c0]/10 -z-10 blur-2xl"></span>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWorks;