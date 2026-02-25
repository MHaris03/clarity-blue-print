import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Herovideo from "../assets/hero-video.mp4"

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={Herovideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay (important for readability) */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    Discover Your{" "}
                    <span className="text-blue-500">
                        Personal Operating System
                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-10">
                    Stop guessing. Start making aligned decisions in life, work, and relationships.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/services"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition flex items-center gap-2"
                    >
                        Get Your Blueprint <ArrowRight size={18} />
                    </Link>

                    <Link
                        to="/about"
                        className="px-8 py-3 border border-gray-700 hover:border-blue-500 rounded-lg font-medium transition text-white"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

        </section>
    );
}