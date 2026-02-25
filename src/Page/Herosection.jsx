import React from "react";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Start with Your Human Design Chart
                    </h1>
                    <p className="text-gray-300 mb-6">
                        Your free chart and introductory video reveal the doorway,
                        your Type, your Strategy, your first rhythm of alignment.
                        <br /><br />
                        But the chart is only the beginning.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-max">
                        Start With Your Design
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1739510199149-fd9538e721ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Human Design Chart"
                        className="rounded-xl shadow-2xl transform rotate-[-6deg] md:rotate-0"
                    />
                </div>

            </div>
        </section>
    );
}