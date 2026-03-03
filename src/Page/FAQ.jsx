import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Clarity Blueprint System?",
    answer:
      "Clarity Blueprint System is a structured framework designed to help individuals, professionals, and organizations gain clarity, alignment, and direction in life and business. We provide strategic guidance, relationship insight, leadership development, and AI‑assisted tools to support long‑term growth.",
  },
  {
    question: "Who are your services for?",
    answer:
      "Our services are designed for:\n\n- Individuals seeking life, relationship, or parenting clarity\n- Professionals and business owners seeking career or leadership alignment\n- Executives and organizations improving team performance and structure",
  },
  {
    question: "What is the Professional Alignment System™?",
    answer:
      "The Professional Alignment System™ helps individuals align their goals, career direction, strengths, and decision‑making with a clear strategic path for growth and performance.",
  },
  {
    question: "What is Relational Architecture™?",
    answer:
      "Relational Architecture™ focuses on improving communication, structure, and alignment within personal and professional relationships, including partnerships, teams, and families.",
  },
  {
    question: "What is Clarity AI™?",
    answer:
      "Clarity AI™ is our AI‑assisted tool designed to help users gain structured insight, reflection prompts, and guided clarity based on their personal or professional needs.",
  },
  {
    question: "Are your services therapy or legal advice?",
    answer:
      "No. Our services are for educational, strategic, and personal development purposes only. We do not provide medical, legal, financial, or licensed psychological services.",
  },
  {
    question: "How do sessions work?",
    answer:
      "Sessions may be conducted virtually or in person (if available). Each session is structured to assess your current situation, identify misalignment, and create actionable steps forward.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary based on individual effort and implementation. Our system provides structure and clarity, but success depends on consistent application.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Yes. We respect your privacy and handle personal information in accordance with our Privacy Policy.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by booking a consultation, selecting a service package, or contacting us directly through our website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center border-b border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Everything you need to know about Clarity Blueprint System, our services, and how to get started.
          </p>
        </motion.div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`border border-white/10 rounded-3xl p-6 cursor-pointer transition-all duration-300
                          ${isActive ? "bg-[#1455c020] border-blue-500" : "hover:bg-[#1455c010] hover:border-blue-500"}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300
                                ${isActive ? "text-blue-400" : "text-white"}`}>
                  {faq.question}
                </h3>
                <span className={`text-2xl font-bold transition-colors duration-300
                                 ${isActive ? "text-blue-400" : "text-gray-400"}`}>
                  {isActive ? "−" : "+"}
                </span>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 whitespace-pre-line leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default FAQ;