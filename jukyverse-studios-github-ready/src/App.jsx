import React, { useState } from "react";

import { Music, Film, Sparkles, Heart, Globe2, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const linktree = "https://linktr.ee/Jukyversestudios";

const contactEmail = "hello@yukiversestudios.com";<button className="button primary" onClick={() => setPage("ttct")}>
  Explore the Universe
</button>

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
    link: "https://youtu.be/Ivsi5JH-l3A"
  },
  {
    title: "Love At First Sight",
    image: "/assets/images/releases/love-at-first-sight.jpg",
    description: "A cinematic story about the moment everything changes forever.",
    link: "https://youtu.be/-sXiT7-RTAw"
  },
  {
    title: "Revive",
    image: "/assets/images/releases/revive.jpg",
    description: "A song about rediscovering warmth, healing, and emotional rebirth.",
    link: "https://youtu.be/B1TxgMgV-k0"
  },
];
<section className="studio-section proof-section">
  <p className="eyebrow">Audience Response</p>
  <h2>Music tested through real emotional connection.</h2>
  <p>
    JUKYVERSE releases are shaped by how they land — replays, sing-along moments,
    visual engagement, emotional reactions, and the quiet signs that a song truly connected.
  </p>

  <div className="proof-card">
    <p>
      “Immediate sing-along response. Strong emotional glow. Multiple replays.
      The final chorus lift landed beautifully.”
    </p>
    <span>— Still Choosing You landing report</span>
  </div>
</section>
function Button({ children, href, variant = "primary" }) {
  const className = variant === "primary" ? "button primary" : "button secondary";
  return (
    <a className={className} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-copy">{children}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="info-card">
      <div className="icon-wrap"><Icon size={24} /></div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState("home"); 
  
   if (page === "ttct") {
    return (
      <main className="ttct-page">
        <section className="hero">
         
       <img
  src="/assets/images/releases/ttct-hero.jpg.JPG"
  alt="Through The Cracks In Time"
  className="ttct-hero-image"
/>
          <p className="lead">
        
            A cinematic emotional universe exploring memory, sacrifice, Displaced Realms,
            altered timelines, love beyond dimensions, and the emotional consequences of
            crossing between worlds.
          </p>
<section className="ttct-intro">
  <p className="ttct-quote">
    “Some worlds do not collapse.
    They become displaced.”
  </p>

  <p className="ttct-story">
    Through The Cracks of Time is a cinematic science fiction universe
    built around memory, sacrifice, love across dimensions, and the
    emotional consequences of fractured timelines.
  </p>
</section>
          <div className="feature-grid">
            <div className="feature-card">
              <h2>Displaced Realms</h2>
              <p>Worlds shifted into alternate dimensions without collapse, leaving echoes and consequences behind.</p>
            </div>

            <div className="feature-card">
              <h2>Proof of Concept</h2>
              <p>Music, visuals, audience response, and emotional storytelling are shaping the foundation.</p>
            </div>

            <div className="feature-card">
              <h2>The Long-Term Vision</h2>
              <p>A cinematic science fiction universe built for film, music, and interconnected worldbuilding.</p>
            </div>
          </div>

          <button className="button primary" onClick={() => setPage("home")}>
            Return to JUKYVERSE
          </button>
        </section>
      </main>
    );
  }
return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brand-icon"><Sparkles size={20} /></span>
          <span>
            <strong>JUKYVERSE</strong>
            <small>Studios</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#music">Music</a>
         <button className="nav-link" onClick={() => setPage("ttct")}>TTCT</button>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <Button href={linktree} variant="secondary">Enter JUKYVERSE</Button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-bg" />
        <motion.div
          className="hero-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-copy">
        <p className="eyebrow">
  Emotional Stories • Cinematic Worlds • Human Connection
</p>
           <h1>
  Welcome to the emotional universe of JUKYVERSE.
</h1>
           <p className="lead">
  Music, visuals, cinematic storytelling, and emotional experiences designed to be felt — not just heard. JUKYVERSE Studios creates interconnected worlds built around romance, memory, longing, healing, and human connection.
</p>
            <div className="quote">
             “Every release is part of a larger emotional universe.”
            </div>
            <div className="button-row">
              <Button href="https://youtu.be/yCY5ZsqJSzQ">Experience the Release</Button>
              <Button href={linktree} variant="secondary">Enter JUKYVERSE</Button>
            </div>
          </div>
          <div className="cover-frame">
            <img src="/assets/images/releases/still-choosing-you.png" alt="Still Choosing You cover art" />
          </div>
        </motion.div>
      </section>

      <section id="music" className="section">
        <SectionTitle eyebrow="Featured Releases" title="The emotional music universe begins here.">
          A growing cinematic catalog built around romance, memory, longing, healing, and human connection.
        </SectionTitle>

        <div className="release-grid">
          {releases.map((release) => (
            <article className="release-card" key={release.title}>
              <div className="release-image">
                <img src={release.image} alt={`${release.title} cover art`} />
              </div>
              <div className="release-content">
                <h3>{release.title}</h3>
                <p>{release.description}</p>
                <a href={release.link} target="_blank" rel="noreferrer" className="release-link">
                  Experience Release <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <SectionTitle eyebrow="What We Create" title="Music, visuals, and cinematic story worlds.">
          JUKYVERSE Studios connects original songs, emotional visuals, audience reaction, and universe-driven storytelling into one evolving creative ecosystem.
        </SectionTitle>
        <div className="three-grid">
          <InfoCard icon={Music} title="Original Music">
            Emotional bilingual songs shaped for streaming, social video, lyric experiences, and intimate audience connection.
          </InfoCard>
          <InfoCard icon={Film} title="Cinematic Visuals">
            Cover art, scene packs, lyric-video worlds, and visual storytelling built around each release.
          </InfoCard>
          <InfoCard icon={Heart} title="Emotional Validation">
            We create, test, measure, and scale what truly connects through real audience response.
          </InfoCard>
        </div>
      </section>

      <section id="ttct" className="section ttct">
        <div className="ttct-panel">
          <p className="eyebrow">TTCT Universe</p>
          <h2>Through The Cracks of Time</h2>
          <p>
            An expanding cinematic universe exploring love, memory, sacrifice, Displaced Realms,
            altered timelines, and the emotional cost of crossing between worlds.
          </p>
        <button className="button primary" onClick={() => setPage("ttct")}>
  Explore the Universe
</button>
        </div>
        <div className="ttct-cards">
          <InfoCard icon={Globe2} title="Displaced Realms">
            Worlds shifted into alternate dimensions without collapsing, leaving echoes and emotional consequences behind.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Proof of Concept">
            Music, visuals, and audience response help shape the foundation for larger cinematic expansion.
          </InfoCard>
        </div>
      </section>
<section id="ttct-details" className="studio-section">
  <p className="eyebrow">TTCT Development Portal</p>
  <h2>The journey begins here.</h2>
  <p>
    Through The Cracks of Time is the first cinematic universe from JUKYVERSE Studios,
    built around love, memory, sacrifice, Displaced Realms, altered timelines, and
    the emotional cost of crossing between worlds.
  </p>
  <p>
    This portal will grow into the official home for teaser visuals, universe notes,
    proof-of-concept materials, investor updates, and cinematic development logs.
  </p>

  <a href="#contact" className="button primary">
    Contact JUKYVERSE About TTCT
  </a>
</section>
      <section id="about" className="section">
        <SectionTitle eyebrow="About the Studio" title="Built around emotion, cinema, and human connection.">
          JUKYVERSE Studios creates cinematic emotional experiences through music, story, and visual atmosphere.
          Blending bilingual songwriting, cinematic presentation, and emotionally driven storytelling, each release is designed to feel immersive, intimate, and timeless.
        </SectionTitle>


</section>
      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Music, commissions, partnerships, and investor inquiries.</h2>
          <p>Reach the studio directly for creative work, collaboration, licensing, press, or future investment conversations.</p>
          <a className="email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
        <Button href={linktree}>Enter JUKYVERSE</Button>
      </section>
<section id="about" className="studio-section">
  <p className="eyebrow">About JUKYVERSE</p>
  <h2>Emotional music. Cinematic worlds. Timeless connection.</h2>
  <p>
    JUKYVERSE Studios creates emotional cinematic experiences through music,
    visual storytelling, and universe-driven worldbuilding. Each release is
    designed to feel intimate, immersive, and deeply human.
  </p>
</section>

<section id="support" className="studio-section">
  <p className="eyebrow">Support the Studio</p>
  <h2>Help build the next chapter of JUKYVERSE.</h2>
  <p>
    Support helps fund new songs, cinematic visuals, lyric videos, TTCT
    development, and future creative expansion.
  </p>
  <a href="https://linktr.ee/Jukyversestudios" target="_blank" rel="noreferrer" className="button primary">
    Enter JUKYVERSE
  </a>
</section>

<section id="ttct" className="studio-section">
  <p className="eyebrow">TTCT Universe</p>
  <h2>Through The Cracks of Time</h2>
  <p>
    An expanding cinematic universe exploring love, memory, sacrifice,
    Displaced Realms, altered timelines, and the emotional cost of crossing
    between worlds.
  </p>
</section>
<section id="still-choosing-you" className="studio-section">
  <p className="eyebrow">Release Feature</p>
  <h2>Still Choosing You</h2>
  <p>
    A cinematic emotional ballad about love that keeps choosing through distance,
    uncertainty, and difficult moments.
  </p>

  <div className="video-wrap">
    <iframe
      src="https://www.youtube.com/embed/yCY5ZsqJSzQ"
      title="Still Choosing You"
      allowFullScreen
    ></iframe>
  </div>
</section>
<section id="contact" className="studio-section">
  <p className="eyebrow">Contact</p>
  <h2>Creative partnerships, licensing, commissions, and cinematic collaborations..</h2>
  <p>
   For creative partnerships, soundtrack licensing, cinematic collaborations, press, or universe expansion opportunities, contact JUKYVERSE Studios directly..
  </p>
  <a href="mailto:hello@yukiversestudios.com" className="email">
    hello@yukiversestudios.com
  </a>
</section>
      <footer>
        © 2026 JUKYVERSE Studios. Built for cinematic music, emotional storytelling, and world creation.
      </footer>
    </main>
  );
}
