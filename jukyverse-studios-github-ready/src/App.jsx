import React from "react";
import { Music, Film, Sparkles, Heart, Globe2, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const linktree = "https://linktr.ee/Jukyversestudios";
const contactEmail = "hello@yukiversestudios.com";

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
          <a href="#ttct">TTCT</a>
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
            <p className="eyebrow">Featured Cinematic Release</p>
            <h1>Still Choosing You</h1>
            <p className="lead">
              A cinematic emotional ballad about love that refuses to disappear even when distance,
              uncertainty, and difficult moments try to pull two hearts apart.
            </p>
            <div className="quote">
              “Sometimes love is not about perfection. Sometimes it is simply about waking up every day
              and still choosing each other.”
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
          <Button href={linktree}>Explore the Universe</Button>
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

<section id="contact" className="studio-section">
  <p className="eyebrow">Contact</p>
  <h2>Commissions, collaborations, licensing, and investor inquiries.</h2>
  <p>
    For creative work, partnerships, press, licensing, or future investment
    conversations, contact JUKYVERSE Studios directly.
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
