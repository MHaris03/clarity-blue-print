import React from 'react';
import Problemimg from "../assets/problem.png";
import { motion } from "framer-motion";

const Problem = () => {
  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden">

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            Most People Aren’t Confused.<br />
            <span className="text-[#1455c0]">They’re Overloaded.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-lg mb-10"
          >
            Without a decision system people experience:
          </motion.p>

          <div className="space-y-6 text-gray-200 mb-12">
            {["Too many decisions.", "Too many expectations.", "Too much noise."].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className="border-l-2 border-[#1455c0] pl-4"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 text-gray-200 mb-12">
            {["Decision fatigue", "Career confusion", "Relationship conflict", "Trial-and-error living", "Burnout"].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {item}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-200 font-medium"
          >
            Most people were never taught
            <span className="text-[#1455c0]"> how their decision system actually works.</span>
          </motion.p>

        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <img
            src={Problemimg}
            alt="Professional feeling overwhelmed at desk"
            className="rounded-3xl shadow-2xl object-cover w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Problem;