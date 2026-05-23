import React from "react"

function App() {

  const releases = [
    {
      title: "Deep In My Heart",
      image: "/assets/images/releases/deep-in-my-heart.png",
      description: "A celestial love song about connection that transcends distance.",
      link: "https://youtu.be/20_GdDdobAM"
    },

    {
      title: "Dreams Come True",
      image: "/assets/images/releases/dreams-come-true.jpg",
      description: "A hopeful romantic anthem about believing in impossible love.",
      link: "https://youtu.be/Ivsi5JH-13A"
    },

    {
      title: "Love At First Sight",
      image: "/assets/images/releases/love-at-first-sight.jpg",
      description: "A cinematic story about the moment everything changes forever.",
      link: "https://youtu.be/-sXiT7-RTAw"
    }
  ]

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-6">
          THROUGH THE CRACKS OF TIME
        </h1>

        <p className="max-w-3xl text-xl md:text-2xl text-gray-300 leading-relaxed">
          An AI-powered cinematic universe blending music, film,
          emotional storytelling, and audience validation into a
          scalable entertainment ecosystem.
        </p>

        <div className="mt-10 flex gap-6">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold">
            Experience The Vision
          </button>

          <button className="px-8 py-4 border border-white rounded-full">
            Investor Overview
          </button>
        </div>
      </section>

      {/* VALIDATION SECTION */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Real Emotional Validation
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              Live Audience Response
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Songs are tested live in real emotional environments
              before scale decisions are made.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              Repeat Play Behavior
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Audience replay behavior and emotional engagement
              are treated as validation metrics.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-4">
              Rapid Content Engine
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Music, visuals, story worlds, and emotional testing
              operate inside a unified AI-assisted pipeline.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}

export default App
