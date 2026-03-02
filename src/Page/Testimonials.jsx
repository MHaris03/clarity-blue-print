import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    // Fallback safety (in case onLoad doesn't fire)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <div className="relative py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1455c0] to-blue-400 bg-clip-text text-transparent mb-6">
            Testimonials
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Real experiences from individuals, professionals, and leaders who
            have implemented the Clarity system.
          </p>
        </motion.div>
      </div>

      {/* Review Widget Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative bg-[#0f0f0f] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-xl min-h-[300px]"
        >

          {/* Loader Overlay */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f0f] rounded-3xl z-10">
              <div className="w-12 h-12 border-4 border-[#1455c0] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400 text-sm">
                Loading reviews...
              </p>
            </div>
          )}

          <iframe
            className="lc_reviews_widget w-full"
            src="https://reputationhub.site/reputation/widgets/review_widget/nQ97ZCKWnCOQdc6QCM7D"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Clarity Reviews"
            onLoad={() => setLoading(false)}
          ></iframe>

        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;