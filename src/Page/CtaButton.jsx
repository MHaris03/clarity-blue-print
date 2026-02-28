import React from 'react'
import { Link } from 'react-router-dom'

const CtaButton = () => {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 sm:py-28 overflow-hidden">

            {/* floating blue glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none animate-pulse-slow">
                <div className="w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">

                {/* optional accent line */}
                <div className="w-16 sm:w-20 h-[2px] bg-[#1455c0] mx-auto mb-4 sm:mb-6"></div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                    Stop Operating in Uncertainty
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-12">
                    Book your free clarity call and build a strategy that finally makes sense.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <Link
                        to="/services"
                        className="px-10 sm:px-14 py-3 sm:py-5 bg-[#1455c0] hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#1455c0]/40 text-base sm:text-lg md:text-xl"
                    >
                        Book Free Clarity Call
                    </Link>

                    <Link
                        to="/about-us"
                        className="px-10 sm:px-14 py-3 sm:py-5 border border-white/20 hover:border-[#1455c0] rounded-xl transition text-base sm:text-lg md:text-xl"
                    >
                        See How It Works
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default CtaButton