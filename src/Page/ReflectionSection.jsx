import React from "react";

export default function ReflectionSection() {
  return (
    <section
      className="relative bg-black text-white py-24"
    //   style={{
    //     backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80')`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //   }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
          WHEN YOU FEEL LIKE YOU’VE LOST YOURSELF
        </h2>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          At some point, we all learned to fit in.<br />
          To meet expectations.<br />
          To become the person others wanted us to be.
        </p>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
          Along the way, we can forget who we truly are.
        </p>

        <div className="text-left md:text-left space-y-4 mt-6 md:mt-10">
          <p className="text-gray-300">You might notice it as:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>hesitation before you speak your mind</li>
            <li>your creativity feeling quieter than before</li>
            <li>acting like you’re performing instead of expressing</li>
            <li>a sense that your real self is distant</li>
            <li>a small voice telling you something important is missing</li>
          </ul>
        </div>

        <p className="text-gray-200 text-lg md:text-xl mt-6">
          You’re not broken. You’ve adapted.<br />
          You learned to survive, and in the process, some parts of you went silent.
        </p>

        <p className="text-blue-400 font-semibold text-xl md:text-2xl mt-6">
          If you’ve ever thought, “I don’t feel like myself anymore,” you are not alone.<br />
          You don’t need to be fixed—you just need to reconnect.
        </p>
      </div>
    </section>
  );
}