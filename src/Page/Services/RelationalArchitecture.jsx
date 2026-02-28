import React from "react";
import { motion } from "framer-motion";
import Relation from "../../assets/relation.jpg"
import { Link } from "react-router-dom";

const RelationalArchitecturePage = () => {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={Relation}
          alt="Relational Architecture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent mb-6">
            Relational Architecture™
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Understand How You’re Designed to Connect, Communicate, and Build Strong Relationships
          </p>

          <Link
            to="/services"
            className="px-10 py-4 bg-[#1455c0] hover:bg-blue-600 rounded-xl text-lg font-semibold shadow-xl hover:shadow-[#1455c0]/50 transition"
          >
            Book Your Session
          </Link>
        </motion.div>
      </div>

      {/* Overview */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#1455c0]">
              Understand Your Relationship Blueprint
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The Relational Architecture™ is a structured system that helps you understand how you naturally form connections, communicate with others, and navigate emotional dynamics in relationships. Instead of relying on guesswork or repeating the same patterns, this framework gives you clear insight into how your relationship style works and how to create healthier, more aligned connections.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              This system focuses on the structure behind relationships including communication patterns, emotional responses, and compatibility factors so you can reduce conflict, strengthen trust, and improve the quality of your personal and professional relationships.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1455c0]/20 to-blue-800/20 p-10 rounded-3xl border border-[#1455c0]/30 backdrop-blur-md">
            <p className="text-gray-200 text-xl leading-relaxed">
              Clear structure.<br />
              Less conflict.<br />
              Stronger alignment.<br />
              Healthier communication.
            </p>
          </div>
        </div>
      </div>

      {/* What Relational Architecture Helps You Understand */}
      <div className="bg-[#0f0f0f] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#1455c0] mb-16">
            What Relational Architecture™ Helps You Understand
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Your natural communication style in relationships",
              "How you process emotions and respond to conflict",
              "Why certain relationships feel easy while others feel difficult",
              "Patterns that may have affected past relationships",
              "What you need to feel supported and understood",
              "How to build stronger connections with partners, family, and colleagues"
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/50 hover:shadow-lg hover:shadow-[#1455c0]/20 transition"
              >
                <p className="text-gray-300 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What’s Included */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-[#1455c0] mb-16">
          What’s Included
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "A detailed Relational Architecture Analysis",
            "Insights into communication and emotional dynamics",
            "Compatibility and relationship pattern insights",
            "Conflict awareness and resolution guidance",
            "Relationship alignment recommendations",
            "A clear action framework to improve current and future relationships"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/40 transition"
            >
              <p className="text-gray-300 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who This Is For */}
      <div className="bg-[#0f0f0f] py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1455c0] mb-12">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
            <div className="bg-gray-900 p-6 rounded-xl">Individuals who want healthier relationships</div>
            <div className="bg-gray-900 p-6 rounded-xl">Couples looking to improve communication</div>
            <div className="bg-gray-900 p-6 rounded-xl">Parents seeking better connection with their children</div>
            <div className="bg-gray-900 p-6 rounded-xl">Professionals who want stronger workplace relationships</div>
            <div className="bg-gray-900 p-6 rounded-xl md:col-span-2">
              Anyone ready to understand how they relate to others at a deeper level
            </div>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-[#1455c0] mb-8">
          Outcome
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          The goal of Relational Architecture™ is to give you a clear framework for how relationships work best for you helping you communicate more effectively, reduce unnecessary conflict, and build stronger, more stable connections in every area of life.
        </p>
      </div>

      {/* Final CTA */}
      <div className="relative py-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1455c0]/30 to-blue-700/20 blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Understand How You’re Designed to Connect?
          </h2>

          <Link
            to="/services"
            className="inline-block mt-6 px-16 py-5 bg-[#1455c0] text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all shadow-2xl hover:shadow-[#1455c0]/50 text-xl"
          >
            Book Your Relational Architecture Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelationalArchitecturePage;