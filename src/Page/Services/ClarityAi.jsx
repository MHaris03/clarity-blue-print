import React from "react";
import { motion } from "framer-motion";
import Relation from "../../assets/relation.jpg"
import { Link } from "react-router-dom";

const ClarityAI = () => {
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
                        Clarity AI™
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Your Personal Strategic Decision Engine
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
                            Clarity AI™ is your ongoing, intelligent support system built around your unique Clarity framework. Instead of generic advice or surface-level motivation, Clarity AI™ uses your personalized operating system to guide real decisions in real time.            </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            It acts as a structured thinking partner — helping you process choices, reduce emotional overwhelm, and move forward with confidence and alignment.            </p>
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
                        What Clarity AI™ Helps You Do
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            "Make confident daily and high-stakes decisions",
                            "Navigate career and business choices",
                            "Handle relationship tension with clarity",
                            "Avoid burnout patterns before they escalate",
                            "Stay aligned with your long-term direction",
                            "Think strategically instead of reactively"
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
                    How It Works
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        "Clarity Operating System™",
                        "Professional Alignment System™ (if applicable)",
                        "Relational Architecture™",

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
                        <div className="bg-gray-900 p-6 rounded-xl">Individuals who want structured daily guidance</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Professionals making complex decisions</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Leaders who need clarity under pressure</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Parents navigating family dynamics</div>
                        <div className="bg-gray-900 p-6 rounded-xl md:col-span-2">
                            Anyone who wants ongoing alignment not one-time insight

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
                    Clarity AI™ helps you reduce hesitation, eliminate second‑guessing, and move forward with structured confidence.                </p>
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
                        Book Your Clarity AI Session
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClarityAI;