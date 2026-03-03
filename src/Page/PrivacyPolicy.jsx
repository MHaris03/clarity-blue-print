import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <section className="bg-black text-white min-h-screen">

            {/* Hero Section */}
            <div className="relative h-[70vh] flex items-center justify-center text-center border-b border-gray-800">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="px-6"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] pb-3 bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                </motion.div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-14">

                {/* Intro */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Clarity Blueprint System (“Company,” “we,” “our,” or “us”) respects
                        your privacy and is committed to protecting your personal
                        information. This Privacy Policy explains how we collect, use, and
                        safeguard your information when you visit our website or use our
                        services.
                    </p>
                </div>

                {/* Information We Collect */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Information We Collect
                    </h2>
                    <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
                        <li>Name and contact details (email, phone number)</li>
                        <li>Billing and payment information</li>
                        <li>Information submitted through forms or consultations</li>
                        <li>Website usage data (IP address, browser type, pages visited)</li>
                    </ul>

                    <p className="mt-6 text-gray-300 leading-relaxed">
                        If you use services such as Clarity Operating System™,
                        Professional Alignment System™, Relational Architecture™,
                        Executive Alignment Session™, or Clarity AI™, we may collect
                        relevant information needed to personalize your experience.
                    </p>
                </div>

                {/* How We Use */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        How We Use Your Information
                    </h2>
                    <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
                        <li>Provide and deliver our services</li>
                        <li>Process payments and schedule sessions</li>
                        <li>Respond to inquiries</li>
                        <li>Improve our website and systems</li>
                        <li>Send updates (you can unsubscribe anytime)</li>
                        <li>Maintain security and prevent fraud</li>
                    </ul>

                    <p className="mt-6 text-gray-300">
                        We do not sell or rent your personal information.
                    </p>
                </div>

                {/* Data Protection */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Data Protection
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We implement appropriate security measures to protect your
                        information. While we strive to safeguard your data, no online
                        system can guarantee complete security.
                    </p>
                </div>

                {/* Third Party */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Third-Party Services
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may use trusted third-party providers for payment processing,
                        hosting, analytics, and communication tools. These providers only
                        receive information necessary to perform their services.
                    </p>
                </div>

                {/* Cookies */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Cookies
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our website may use cookies to improve user experience and analyze
                        website performance. You may disable cookies through your browser
                        settings.
                    </p>
                </div>

                {/* Your Rights */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Your Rights
                    </h2>
                    <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
                        <li>Access your personal data</li>
                        <li>Correct inaccurate information</li>
                        <li>Delete your data</li>
                        <li>Opt out of marketing communications</li>
                    </ul>

                    <p className="mt-6 text-gray-300">
                        To make a request, contact us at:
                        <br />
                        <a
                            href="mailto:Info@clarityblueprintsystems.com"
                            className="text-blue-400 hover:text-blue-300 transition"
                        >
                            Info@clarityblueprintsystems.com
                        </a>
                    </p>
                </div>

                {/* Updates */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Updates to This Policy
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time. Changes will
                        be posted on this page with a revised effective date.
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">
                    <h2 className="text-2xl font-semibold mb-6">
                        Contact Us
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have questions about this Privacy Policy, please contact:
                        <br /><br />
                        Clarity Blueprint System
                        <br />
                        Email:{" "}
                        <a
                            href="mailto:Info@clarityblueprintsystems.com"
                            className="text-blue-400 hover:text-blue-300 transition"
                        >
                            Info@clarityblueprintsystems.com
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PrivacyPolicy;