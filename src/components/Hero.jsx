import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Herovideo from "../assets/hero-video.mp4";
import { motion } from "framer-motion";

// Motion-enabled Link
const MotionLink = motion(Link);

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden min-h-screen">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <div className="mb-6 mt-10">
          {/* <span className="px-4 py-1.5 text-sm bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 tracking-wide">
            Personal Strategy Framework
          </span> */}
        </div>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Clarity for <span className="text-[#1455c0]">High-Achievers</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-3xl font-bold text-white leading-tight mb-6"
        >
          Clarity Blueprint System
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4"
        >
          A Decision Framework for Life, Work, and Leadership
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-md text-gray-200 max-w-2xl mx-auto mb-4"
        >
          Discover how you're designed to make decisions, manage energy, and align your life using the
          Clarity Blueprint System and AI Clarity Coach.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4"
        >
          Stop second-guessing. Build a strategy that finally makes sense.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          A Personal Operating System for decisions, life, work, and long-term success —
          built with custom blueprints and AI-powered guidance.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MotionLink
            to="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
          >
            Get Your Clarity Blueprint
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </MotionLink>

          <MotionLink
            to="/about-us"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border border-gray-600 hover:border-blue-500 rounded-xl font-medium transition text-white hover:bg-white/5"
          >
            Sample Blueprint
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}