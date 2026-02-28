import React from 'react'
import { motion } from "framer-motion";
import Relation from "../../assets/professional.jpg"
import { Link } from 'react-router-dom';

const ProfessionalAlignment = () => {
    return (
        <section className="bg-black text-white overflow-hidden">

            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center text-center">
                <img
                    src={Relation}
                    alt="Relational Architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] pb-3 bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent mb-6">
                        Professional Alignment System™
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Career & Income Architecture for High‑Performing Professionals
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
                            The Professional Alignment System™ is a structured framework designed to help professionals, business owners, and leaders align how they work with how they naturally operate. Instead of forcing productivity systems that lead to burnout, this system identifies the environments, roles, and decision patterns where you perform at your best.                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            It provides a clear strategy for improving career direction, increasing income stability, and reducing the friction that often comes from misaligned responsibilities or leadership structures.

                            Through this system, you gain a deeper understanding of how to position yourself professionally, make confident decisions, and build sustainable success without constant stress or overwork.                        </p>
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
                        What the Professional Alignment System™ Helps You Achieve

                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            "Clarify your ideal professional role and responsibilities",
                            "Identify work environments where you perform best",
                            "Improve leadership and management alignment",
                            "Build a sustainable income structure",
                            "Reduce burnout and decision fatigue",
                            "Increase confidence in career or business direction",
                            "Align your strengths with long‑term professional growth"
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
                        "A detailed Professional Alignment Analysis",
                        "Personalized career and role alignment insights",
                        "Work environment and productivity framework",
                        "Leadership and decision‑making guidance",
                        "Income and growth strategy recommendations",
                        "Action plan for implementing alignment in your work or business"
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
                        <div className="bg-gray-900 p-6 rounded-xl">Entrepreneurs and business owners</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Executives and managers</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Professionals seeking career clarity</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Leaders responsible for teams or major decisions</div>
                        <div className="bg-gray-900 p-6 rounded-xl md:col-span-2">
                            Individuals ready to operate at a higher level of alignment and performance
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
                    The goal of the Professional Alignment System™ is simple:
                    to help you work in a way that matches how you are designed to perform — so you can make better decisions, lead effectively, and grow professionally with clarity and stability.                </p>
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
                        Book Your Professional Alignment Session
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProfessionalAlignment
