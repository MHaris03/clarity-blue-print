import React from 'react'

const HowWorks = () => {
  return (
    <section className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-20">
          A Clear 3-Step Process
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Step 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-[#1455c0] relative">
                01
                <span className="absolute inset-0 w-full h-full rounded-full bg-[#1455c0]/10 -z-10 blur-2xl"></span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-4">Discovery Call</h3>
            <p className="text-gray-300">
              Identify bottlenecks, blind spots, and strategic friction points.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-[#1455c0] relative">
                02
                <span className="absolute inset-0 w-full h-full rounded-full bg-[#1455c0]/10 -z-10 blur-2xl"></span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-4">Blueprint Design</h3>
            <p className="text-gray-300">
              Build your customized decision framework and execution roadmap.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-[#1455c0] relative">
                03
                <span className="absolute inset-0 w-full h-full rounded-full bg-[#1455c0]/10 -z-10 blur-2xl"></span>
              </div>
            </div>
            <h3 className="font-semibold text-xl mb-4">Implementation Guidance</h3>
            <p className="text-gray-300">
              Apply your system with clarity, focus, and confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowWorks