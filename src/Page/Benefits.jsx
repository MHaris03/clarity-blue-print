import React from "react";
import benefitsImg from "../assets/alignment.png"; 
import { motion } from "framer-motion";

const benefitsList = [
    { title: "Aligned Decisions", desc: "Confident choices based on how you are designed to operate." },
    { title: "Clear Direction", desc: "A stronger sense of purpose and life direction." },
    { title: "Better Communication", desc: "Understanding how you and others naturally interact." },
    { title: "Sustainable Energy", desc: "Working and living in ways that support your natural energy." },
    { title: "Stronger Relationships", desc: "Less conflict and deeper connection with others." },
    { title: "Career Alignment", desc: "Roles and opportunities that fit your strengths." },
];

const BenefitsSection = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 }
        })
    };

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

                {/* Visual with Glow */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="absolute w-[400px] h-[400px] bg-[#1455c0]/20 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    <img
                        src={benefitsImg}
                        alt="Benefits Visual"
                        className="relative w-full rounded-2xl shadow-2xl z-10"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        What Happens When You <span className="text-[#1455c0]">Operate in Alignment</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-400 mb-12 max-w-lg"
                    >
                        When you understand how you're designed to operate, life becomes less about guessing and more about alignment.
                    </motion.p>

                    {/* Benefits List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefitsList.map((benefit, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#1455c0] hover:scale-105 transition"
                            >
                                <h3 className="text-xl font-semibold text-[#1455c0]">{benefit.title}</h3>
                                <p className="text-gray-300 mt-2">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;