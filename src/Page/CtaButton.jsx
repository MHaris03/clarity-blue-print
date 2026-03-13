import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link); // wrap Link for Framer Motion

const CtaButton = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 sm:py-28 overflow-hidden">

      {/* floating blue glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none animate-pulse-slow">
        <div className="w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">

        {/* optional accent line */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 sm:w-20 h-[2px] bg-[#1455c0] mx-auto mb-4 sm:mb-6"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6"
        >
          Start Living and Deciding With Clarity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          Build your life strategy that finally makes sense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            to="/contact-us"
            className="px-10 sm:px-14 py-3 sm:py-5 bg-[#1455c0] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#1455c0]/40 text-base sm:text-lg md:text-xl"
          >
            Get Your Clarity Blueprint
          </MotionLink>
        </motion.div>

      </div>
    </section>
  );
}

export default CtaButton;