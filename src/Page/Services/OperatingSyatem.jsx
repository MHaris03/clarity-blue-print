import React from 'react'
import { motion } from "framer-motion";
import Relation from "../../assets/executive.jpg"
import { Link } from "react-router-dom";

const OperatingSyatem = () => {
    return (
        <section className="bg-black text-white overflow-hidden">

            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center text-center">
                {/* <img
                    src={Relation}
                    alt="Clarity Operating System"
                    className="absolute inset-0 w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] pb-3 bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent mb-6">
                        Clarity Operating System™
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Your Personal Framework for Decisions, Direction, and Sustainable Success
                    </p>

                    <Link
                        to="/services"
                        className="px-10 py-4 bg-[#1455c0] hover:bg-blue-600 rounded-xl text-lg font-semibold shadow-xl hover:shadow-[#1455c0]/50 transition"
                    >
                        Begin Your Clarity Process
                    </Link>
                </motion.div>
            </div>

            {/* Overview */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-[#1455c0]">
                            Your Personal Operating Blueprint
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            The Clarity Operating System™ is the foundation of the entire Clarity ecosystem. It is a personalized, structured framework that shows you exactly how you are designed to make decisions, manage energy, navigate pressure, and build a life or career that works with you — not against you.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Most people operate on borrowed strategies. <br />
                            The Clarity Operating System™ gives you your own.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#1455c0]/20 to-blue-800/20 p-10 rounded-3xl border border-[#1455c0]/30 backdrop-blur-md">
                        <p className="text-gray-200 text-xl leading-relaxed">
                            Clear structure.<br />
                            Less second-guessing.<br />
                            Sustainable energy.<br />
                            Strategic alignment.
                        </p>
                    </div>
                </div>
            </div>

            {/* What It Reveals */}
            <div className="bg-[#0f0f0f] py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-[#1455c0] mb-16">
                        What the Clarity Operating System™ Reveals
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            "Your natural decision-making style",
                            "How you process pressure and responsibility",
                            "Where your energy increases vs. drains",
                            "Your burnout patterns and how to prevent them",
                            "Your ideal environments for growth",
                            "Your strengths in leadership, work, and relationships",
                            "Behavioral patterns that may be holding you back"
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

            {/* What You Receive */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold text-center text-[#1455c0] mb-16">
                    What You Receive
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        "Comprehensive personalized Clarity Operating System™ report",
                        "Clear explanation of your decision architecture",
                        "Energy alignment and burnout prevention framework",
                        "Work and lifestyle alignment insights",
                        "Relationship and communication dynamics overview",
                        "Practical implementation guidance",
                        "Structured action plan for immediate application"
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

            {/* Who It’s For */}
            <div className="bg-[#0f0f0f] py-24 text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-[#1455c0] mb-12">
                        Who It’s For
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
                        <div className="bg-gray-900 p-6 rounded-xl">Individuals seeking direction and structure</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Professionals navigating growth or transition</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Entrepreneurs managing high responsibility</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Leaders making frequent high-impact decisions</div>
                        <div className="bg-gray-900 p-6 rounded-xl md:col-span-2">
                            Anyone tired of operating in confusion or overwhelm
                        </div>
                    </div>
                </div>
            </div>

            {/* Outcome */}
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-4xl font-bold text-[#1455c0] mb-8">
                    The Outcome
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Faster, more confident decision-making.<br />
                    Reduced second-guessing.<br />
                    Lower burnout risk.<br />
                    Stronger alignment in work and relationships.<br />
                    A repeatable system you can rely on.
                </p>

                <p className="text-gray-400 text-xl">
                    Because clarity isn’t about motivation. <br />
                    It’s about operating correctly.
                </p>
            </div>

            {/* Final CTA */}
            <div className="relative py-28 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1455c0]/30 to-blue-700/20 blur-3xl"></div>

                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Build Your Personal Operating System?
                    </h2>

                    <Link
                        to="/services"
                        className="inline-block mt-6 px-16 py-5 bg-[#1455c0] text-white font-semibold rounded-2xl hover:bg-blue-600 transition-all shadow-2xl hover:shadow-[#1455c0]/50 text-xl"
                    >
                        Start Your Clarity Operating System™
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default OperatingSyatem