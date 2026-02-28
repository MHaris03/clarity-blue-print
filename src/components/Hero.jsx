import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Herovideo from "../assets/hero-video.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        
        {/* Small Top Tag */}
        <div className="mb-6">
          <span className="px-4 py-1.5 text-sm bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 tracking-wide">
            Personal Strategy Framework
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Clarity for{" "}
          <span className="text-blue-500">High-Achievers</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4">
          Stop second-guessing. Build a strategy that finally makes sense.
        </p>

        {/* Supporting Line */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          A Personal Operating System for decisions, life, work, and long-term success — 
          built with custom blueprints and AI-powered guidance.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/services"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
          >
            Book Your Free Clarity Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/about-us"
            className="px-8 py-4 border border-gray-600 hover:border-blue-500 rounded-xl font-medium transition text-white hover:bg-white/5"
          >
            See Sample Blueprint
          </Link>

        </div>
      </div>
    </section>
  );
}