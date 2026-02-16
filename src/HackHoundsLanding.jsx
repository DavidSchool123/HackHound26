import React from "react";
import "./HackHounds.css"; // optional, for custom styles

const HackHoundsLanding = () => {
  return (
    <div className="hh-root">

  {/* HERO */}
  <header className="hh-hero" id="top">
    <div className="hh-hero-content">
      <h1>HackHounds 2026</h1>
      <p className="hh-tagline">Build. Learn. Create. Join the Pack.</p>
      <p className="hh-hero-meta">April 11–12 • Loyola University Maryland</p>

      <a
        href="https://forms.office.com/your-link"
        target="_blank"
        rel="noreferrer"
        className="hh-btn"
      >
        Register Now
      </a>
    </div>
  </header>

  {/* NAV */}
  <nav className="hh-nav">
    <div className="hh-nav-left">
      <span className="hh-nav-title">HackHounds ’26</span>
    </div>
    <a href="#about">About</a>
    <a href="#tracks">Tracks</a>
    <a href="#prizes">Prizes</a>
    <a href="#schedule">Schedule</a>
    <a href="#faq">FAQ</a>
    <a href="#team">Team</a>
    <a href="#sponsors">Sponsors</a>
    <a href="#contact">Contact</a>
  </nav>

  {/* ABOUT */}
  <section id="about" className="hh-section">
    <h2>About</h2>
    <p>
      HackHounds is Loyola University Maryland’s annual hackathon — a weekend
      where students from any school come together to build creative, impactful,
      and innovative projects. Whether you're a beginner or an experienced
      developer, HackHounds is designed to help you learn, collaborate, and
      create something meaningful.
    </p>
  </section>

  {/* TRACKS */}
  <section id="tracks" className="hh-section">
    <h2>Tracks</h2>
    <p>Choose a track or build anything you're passionate about.</p>

    <div className="hh-grid">
      <div className="hh-card">
        <h3>General</h3>
        <p>Open‑ended projects across any domain.</p>
      </div>

      <div className="hh-card">
        <h3>AI / Machine Learning</h3>
        <p>Build with AI models, automation, or intelligent systems.</p>
      </div>

      <div className="hh-card">
        <h3>Health</h3>
        <p>Create tools that support wellness or healthcare.</p>
      </div>
    </div>
  </section>

  {/* PRIZES */}
  <section id="prizes" className="hh-section">
    <h2>Prizes</h2>

    <div className="hh-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <p><strong>Best General Track</strong></p>
      <p><strong>Best AI/ML Track</strong></p>
      <p><strong>Best Health Track</strong></p>
      <p><strong>Most Creative Hack</strong></p>
      <p><strong>Best Overall Project</strong></p>
    </div>

    <p className="hh-note">Prize details will be announced soon.</p>
  </section>

  {/* SCHEDULE */}
  <section id="schedule" className="hh-section">
    <h2>Schedule</h2>

    <div className="hh-schedule">
      <div className="hh-card">
        <h3>Saturday — April 11</h3>
        <p>9:00 AM — Check‑in & breakfast</p>
        <p>10:00 AM — Opening ceremony</p>
        <p>11:00 AM — Team formation</p>
        <p>12:00 PM — Hacking begins</p>
        <p>2:00 PM — Workshops</p>
        <p>6:00 PM — Dinner & midpoint check‑in</p>
      </div>

      <div className="hh-card">
        <h3>Sunday — April 12</h3>
        <p>9:00 AM — Breakfast</p>
        <p>12:00 PM — Hacking ends</p>
        <p>1:00 PM — Demos & judging</p>
        <p>3:00 PM — Awards ceremony</p>
        <p>4:00 PM — Closing remarks</p>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section id="faq" className="hh-section">
    <h2>FAQ</h2>

    <div className="hh-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="hh-card">
        <h3>Do I need experience?</h3>
        <p>No — HackHounds is beginner‑friendly.</p>
      </div>

      <div className="hh-card">
        <h3>Is it free?</h3>
        <p>Yes, participation is completely free.</p>
      </div>

      <div className="hh-card">
        <h3>Do I need a team?</h3>
        <p>You can come solo — we’ll help you join a team.</p>
      </div>

      <div className="hh-card">
        <h3>What should I bring?</h3>
        <p>A laptop, charger, and your creativity.</p>
      </div>
    </div>
  </section>

  {/* TEAM */}
  <section id="team" className="hh-section">
    <h2>Team</h2>
    <p>Meet the organizers behind HackHounds.</p>

    <div className="hh-grid">
      <div className="hh-card"><h3>David Ogunbanjo</h3><p>Organizer</p></div>
      <div className="hh-card"><h3>Aidan Marshall</h3><p>Host Club</p></div>
    </div>
  </section>

  {/* SPONSORS */}
  <section id="sponsors" className="hh-section">
    <h2>Sponsors</h2>

    <div className="hh-grid">
      <div className="hh-card">Anthropic</div>
      <div className="hh-card">Meta</div>
      <div className="hh-card">Loyola University Maryland</div>
    </div>

    <p className="hh-note">Interested in sponsoring? Email us.</p>
  </section>

  {/* CONTACT */}
  <section id="contact" className="hh-section">
    <h2>Contact</h2>
    <p>Questions? Reach out at:</p>
    <p><strong>hackhounds@loyola.edu</strong></p>
  </section>

  {/* FOOTER */}
  <footer className="hh-footer">
    <p>© 2026 HackHounds • Loyola University Maryland</p>
  </footer>

</div>

  );
};

export default HackHoundsLanding;
