import React from "react";
import coachImg from "../assets/coach.png";
import { UserCheck, Zap, Users } from "lucide-react";

const AIClarityCoachPage = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute w-[600px] h-[600px] bg-[#1455c0]/10 rounded-full top-[-150px] left-[-150px] blur-3xl z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#1455c0]/20 rounded-full bottom-[-150px] right-[-100px] blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Meet Your <span className="text-[#1455c0]">AI Clarity Coach</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Your AI Clarity Coach uses your personal blueprint to provide ongoing guidance for decisions, relationships, and life direction.
          </p>

          {/* Feature Cards - staggered & floating */}
          <div className="relative mt-12 flex flex-col md:flex-row gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:scale-105 transition-transform shadow-xl flex-1 -translate-y-4">
              <UserCheck className="w-12 h-12 text-[#1455c0] mb-3" />
              <h3 className="text-xl font-semibold text-[#1455c0]">Personalized Guidance</h3>
              <p className="text-gray-300 mt-1">
                Insights tailored to your natural strengths and design.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:scale-105 transition-transform shadow-xl flex-1 translate-y-4">
              <Zap className="w-12 h-12 text-[#1455c0] mb-3" />
              <h3 className="text-xl font-semibold text-[#1455c0]">Decision Support</h3>
              <p className="text-gray-300 mt-1">
                Make confident choices aligned to your blueprint.
              </p>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl hover:scale-105 transition-transform shadow-xl flex-1 -translate-y-2">
              <Users className="w-12 h-12 text-[#1455c0] mb-3" />
              <h3 className="text-xl font-semibold text-[#1455c0]">Relationship Insights</h3>
              <p className="text-gray-300 mt-1">
                Understand interactions for stronger, authentic connections.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section with overlapping effect */}
        <div className="flex-1 relative mt-12 lg:mt-0">
          <div className="absolute -inset-4 bg-[#1455c0]/20 rounded-3xl blur-2xl z-0"></div>
          <img
            src={coachImg}
            alt="AI Clarity Coach"
            className="relative rounded-3xl shadow-2xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AIClarityCoachPage;