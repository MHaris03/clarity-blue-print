import React from 'react'
import { motion } from "framer-motion";
import Relation from "../../assets/executive.jpg"
import { Link } from "react-router-dom";

const Executive = () => {
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
                        Executive Alignment Session™
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Private Strategic Intensive for High‑Level Decisions
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
                            The Executive Alignment Session™ is a focused, high‑impact strategy intensive designed for leaders, entrepreneurs, and decision‑makers facing complex or high‑stakes situations.                         </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            This is not a coaching call.<br />
                            It is a structured clarity intervention.<br />
                            In this private session, we analyze your current challenge through the lens of your Clarity framework — identifying misalignment, pressure points, and strategic blind spots — then build a clear, executable path forward.
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
                        What This Session Is Designed For
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            "Major career or business pivots",
                            "Leadership challenges",
                            "High‑stakes professional decisions",
                            "Organizational role restructuring",
                            "Burnout at the executive level",
                            "Relationship or partnership crossroads",
                            "Strategic direction uncertainty"
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

            <div className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold text-center text-[#1455c0] mb-16">
                    What Happens During the Session
                </h2>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/40 transition">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Pre-Session Preparation
                        </h3>
                        <p className="text-gray-300">
                            Your Clarity framework and current professional situation are reviewed in advance to ensure our time together is focused and high impact.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/40 transition">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Strategic Deep Dive (60–120 Minutes)
                        </h3>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>The real decision at hand</li>
                            <li>Competing pressures and constraints</li>
                            <li>Alignment vs misalignment factors</li>
                            <li>Long-term implications</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/40 transition">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Framework Application
                        </h3>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>Decision style</li>
                            <li>Energy architecture</li>
                            <li>Leadership profile</li>
                            <li>Professional alignment structure</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1455c0]/40 transition">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Clear Action Plan
                        </h3>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>A defined decision pathway</li>
                            <li>Implementation steps</li>
                            <li>Risk awareness</li>
                            <li>Strategic positioning clarity</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-[#0f0f0f] py-24 text-center">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-[#1455c0] mb-12">
                        Who This Is For
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
                        <div className="bg-gray-900 p-6 rounded-xl">Business owners</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Executives</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Senior managers</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Founders</div>
                        <div className="bg-gray-900 p-6 rounded-xl">Individuals navigating major life transitions</div>
                        <div className="bg-gray-900 p-6 rounded-xl md:col-span-2">
                            Leaders responsible for teams or revenue
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
                    The Executive Alignment Session™ delivers structured clarity under pressure.
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
                        Book Your Clarity AI Session
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Executive
