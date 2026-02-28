import React from 'react'
import Transformimg from "../assets/transform.avif"

const Transformation = () => {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            From Overwhelmed to Strategically Clear
          </h2>

          <p className="text-gray-400 text-lg md:text-xl">
            Most high performers don’t lack ambition.
            They lack structured clarity.
            We help you move from mental noise to confident execution.
          </p>
        </div>

        {/* Image + Cards Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={Transformimg}
              alt="Focused professional working with clarity"
              className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Cards */}
          <div className="space-y-8">

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#1455c0] transition">
              <h3 className="font-semibold text-xl mb-3">
                Overloaded Decisions
              </h3>
              <p className="text-gray-400">
                Too many options. No clear direction. Constant second-guessing.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#1455c0] transition">
              <h3 className="font-semibold text-xl mb-3">
                Strategic Structure
              </h3>
              <p className="text-gray-400">
                Defined priorities. Clear roadmap. A system for smarter decisions.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#1455c0] transition">
              <h3 className="font-semibold text-xl mb-3">
                Confident Execution
              </h3>
              <p className="text-gray-400">
                Focused action aligned with long-term vision and measurable outcomes.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Transformation