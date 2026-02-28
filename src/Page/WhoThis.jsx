import React from 'react'
import { Briefcase, Lightbulb, Target } from 'lucide-react'

const WhoThis = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Built for High-Performing Professionals
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="text-[#1455c0] w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#1455c0]">
              Entrepreneurs Feeling Stuck
            </h3>
            <p className="text-gray-300">
              You’re growing fast but unclear about your next strategic move.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="text-[#1455c0] w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#1455c0]">
              Founders Facing Big Decisions
            </h3>
            <p className="text-gray-300">
              Expansion, pivot, hiring, scaling. You need structured thinking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#1455c0] transition shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Target className="text-[#1455c0] w-10 h-10" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#1455c0]">
              Ambitious Professionals
            </h3>
            <p className="text-gray-300">
              You want alignment between your work, goals, and long-term vision.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoThis