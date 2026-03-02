// import React from 'react'

// const Social = () => {
//   return (
//     <section className="relative py-10 bg-black overflow-hidden">
      
//       {/* subtle glow behind card */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

//       <div className="relative max-w-4xl mx-auto px-6 text-center">

//         <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
//           What Clients Experience
//         </h2>

//         <div className="bg-white/20 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/10">
          
//           <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-8">
//             “Before this process, I was constantly second-guessing decisions.
//             Now I operate with a clear structure and confidence in every move.”
//           </p>

//           <div className="w-14 h-[2px] bg-[#1455c0] mx-auto mb-6"></div>

//           <span className="font-semibold text-gray-100">
//             — Founder, Growth-Stage Company
//           </span>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Social





import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Social = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden min-h-screen">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-14 text-white"
        >
          What Clients Experience
        </motion.h2>

        {/* Widget Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative"
        >

          {/* Loader */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f0f0f] rounded-3xl z-10">
              <div className="w-12 h-12 border-4 border-[#1455c0] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400 text-sm">
                Loading reviews...
              </p>
            </div>
          )}

          {/* Review Widget */}
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

export default Social;
