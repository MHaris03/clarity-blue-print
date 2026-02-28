import React from 'react'
import Problemimg from "../assets/problem.avif"

const Problem = () => {
    return (
        <section className="relative bg-black text-white py-10 px-6 overflow-hidden">

            {/* subtle blue glow */}
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        Most People Aren’t Confused.
                        <br />
                        <span className="text-[#1455c0]">They’re Overloaded.</span>
                    </h2>

                    <p className="text-gray-200 text-lg mb-10">
                        You don’t lack intelligence.
                        You lack structure.
                    </p>

                    <div className="space-y-6 text-gray-200 mb-12">

                        <div className="border-l-2 border-[#1455c0] pl-4">
                            Too many decisions.
                        </div>

                        <div className="border-l-2 border-[#1455c0] pl-4">
                            Too many expectations.
                        </div>

                        <div className="border-l-2 border-[#1455c0] pl-4">
                            Too much noise.
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-6 text-gray-200 mb-12">
                        <p>Decision fatigue</p>
                        <p>Burnout</p>
                        <p>Inconsistent income</p>
                        <p>Relationship friction</p>
                        <p>Constant self-doubt</p>
                    </div>

                    <p className="text-lg text-gray-200 font-medium">
                        Clarity isn’t about motivation.
                        <span className="text-[#1455c0]"> It’s about operating correctly.</span>
                    </p>

                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src={Problemimg}
                        alt="Professional feeling overwhelmed at desk"
                        className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
                </div>

            </div>
        </section>
    )
}

export default Problem