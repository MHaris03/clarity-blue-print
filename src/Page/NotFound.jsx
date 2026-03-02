import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to clarity.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-[#1455c0] to-blue-500 px-8 py-3 rounded-full font-medium hover:opacity-90 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </motion.div>

    </section>
  );
};

export default NotFound;