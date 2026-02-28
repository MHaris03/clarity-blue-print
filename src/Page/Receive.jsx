import React from 'react'

const Receive = () => {
    return (
        <section className="bg-black py-10 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-16">
                    Your Custom Clarity Blueprint Includes:
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        "50–70 page personalized PDF",
                        "Decision-making framework",
                        "Energy alignment map",
                        "Career & income strategy",
                        "Relationship guidance",
                        "Stop / Start / Delegate plan",
                        "Personalized AI coaching prompts"
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/10 rounded-xl hover:border-yellow-500 transition text-gray-300">
                            {item}
                        </div>
                    ))}

                </div>

                <p className="text-gray-500 mt-16">
                    No generic readings. No fluff. No recycled reports.
                </p>

            </div>
        </section>
    )
}

export default Receive
