import React from 'react'

const Social = () => {
  return (
    <section className="relative py-10 bg-black overflow-hidden">
      
      {/* subtle glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1455c0]/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
          What Clients Experience
        </h2>

        <div className="bg-white/20 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-white/10">
          
          <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-8">
            “Before this process, I was constantly second-guessing decisions.
            Now I operate with a clear structure and confidence in every move.”
          </p>

          <div className="w-14 h-[2px] bg-[#1455c0] mx-auto mb-6"></div>

          <span className="font-semibold text-gray-100">
            — Founder, Growth-Stage Company
          </span>

        </div>

      </div>
    </section>
  )
}

export default Social