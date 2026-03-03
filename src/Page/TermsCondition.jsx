import { motion } from "framer-motion";

const TermsConditions = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-14">

        {/* Intro */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          <p className="text-gray-300 leading-relaxed text-lg">
            Welcome to Clarity Blueprint System. By accessing or using our
            website and services, you agree to the following Terms and
            Conditions. If you do not agree, please do not use our website or
            services.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            1. Services Provided
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Clarity Blueprint System provides coaching, consulting, alignment
            systems, and AI-assisted tools designed for personal, professional,
            and organizational development.
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
            <li>Professional Alignment System™</li>
            <li>Relational Architecture™</li>
            <li>Executive Alignment Sessions™</li>
            <li>Clarity Operating System™</li>
            <li>Clarity AI™ tools</li>
          </ul>

          <p className="mt-6 text-gray-300">
            All services are intended for educational, informational, and
            personal development purposes only.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            2. No Professional Advice
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our services do not replace legal, financial, medical,
            psychological, or licensed professional advice.
            <br /><br />
            You are solely responsible for decisions, actions, and results
            based on the use of our services.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            3. User Responsibilities
          </h2>
          <ul className="space-y-3 text-gray-300 list-disc list-inside leading-relaxed">
            <li>Provide accurate and truthful information</li>
            <li>Not misuse, copy, or redistribute proprietary materials</li>
            <li>Not use our services for unlawful purposes</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            4. Payments & Refunds
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All fees for services, programs, or sessions must be paid as agreed
            at the time of purchase.
            <br /><br />
            Refund policies (if applicable) will be clearly stated at the time
            of purchase. Unless otherwise specified, payments are non-refundable.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            5. Intellectual Property
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All content on this website, including text, branding, systems,
            graphics, logos, and frameworks, is the property of Clarity
            Blueprint System and is protected by intellectual property laws.
            <br /><br />
            You may not copy, reproduce, distribute, or modify any materials
            without written permission.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Clarity Blueprint System shall not be liable for any direct,
            indirect, incidental, or consequential damages resulting from the
            use or inability to use our services.
            <br /><br />
            You acknowledge that results vary based on individual effort,
            circumstances, and implementation.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            7. Confidentiality
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We respect your privacy and will handle personal information in
            accordance with our Privacy Policy. However, communication through
            online platforms may not be completely secure.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            8. Third-Party Services
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may use third-party platforms for payments, hosting, scheduling,
            or analytics. We are not responsible for the policies or practices
            of these third-party providers.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            9. Termination
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to suspend or terminate access to our services
            if a user violates these Terms and Conditions.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            10. Changes to Terms
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these Terms and Conditions at any time. Updates will
            be posted on this page with a revised effective date.
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            11. Governing Law
          </h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms and Conditions shall be governed by the laws of
            {/* [Insert State/Country]. */}
          </p>
        </div>

        {/* Contact */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            12. Contact Information
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions regarding these Terms and Conditions,
            please contact:
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

export default TermsConditions;