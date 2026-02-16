import React from "react";
import "./HackHounds.css"; // optional, for custom styles

const HackHoundsLanding = () => {
  return (
    <div className="hh-root">
      {/* HERO */}
      <header className="hh-hero" id="top">
        <div className="hh-hero-content">
          <h1>HackHounds 2026</h1>
          <p className="hh-tagline">Build. Break. Innovate. Join the pack.</p>
          <p className="hh-hero-meta">
            Loyola University Maryland • Baltimore, MD <br />
            April 10–12, 2026
          </p>
          <a
            href="https://forms.office.com/r/MDQ63jJ4Ew?origin=lprLink"
            target="_blank"
            rel="noreferrer"
            className="hh-btn hh-btn-primary"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* NAV (optional simple anchor nav) */}
      <nav className="hh-nav">
        <a href="#about">About</a>
        <a href="#schedule">Schedule</a>
        <a href="#tracks">Tracks</a>
        <a href="#prizes">Prizes</a>
        <a href="#workshops">Workshops</a>
        <a href="#rules">Rules</a>
        <a href="#register">Register</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* ABOUT */}
      <section id="about" className="hh-section">
        <h2>About HackHounds</h2>
        <p>
          HackHounds is Loyola University Maryland’s open hackathon, bringing
          together builders, designers, and innovators from campuses across the
          region. Hosted by Loyola’s ACM chapter, Cybersecurity Club, and
          ColorStack, HackHounds is beginner‑friendly and community‑focused.
        </p>
        <p>
          Over one weekend, you’ll learn new tools, attend workshops, meet
          mentors, and build something you’re proud of—whether it’s your first
          project or your fiftieth.
        </p>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="hh-section hh-section-alt">
        <h2>Schedule</h2>

        <div className="hh-schedule">
            <div className="hh-card">
            <h3>Saturday — April 11</h3>
            <p>9:00 AM — Check‑in & breakfast</p>
            <p>10:00 AM — Opening ceremony & kickoff</p>
            <p>11:00 AM — Team formation & ideation</p>
            <p>12:00 PM — Hacking begins</p>
            <p>2:00 PM — Workshops & mentor sessions</p>
            <p>6:00 PM — Dinner & midpoint check‑in</p>
            </div>

            <div className="hh-card">
            <h3>Sunday — April 12</h3>
            <p>9:00 AM — Breakfast & final hacking sprint</p>
            <p>12:00 PM — Hacking ends</p>
            <p>1:00 PM — Project demos & judging</p>
            <p>3:00 PM — Awards ceremony</p>
            <p>4:00 PM — Closing remarks</p>
            </div>
        </div>
        </section>


      {/* TRACKS / THEMES */}
      <section id="tracks" className="hh-section">
      <h2>Tracks</h2>
        <p>Choose a track or build anything you're passionate about.</p>

        <div className="hh-grid">
            <div className="hh-card">
            <h3>General</h3>
            <p>Open‑ended projects across any domain or technology.</p>
            </div>

            <div className="hh-card">
            <h3>AI / Machine Learning</h3>
            <p>Build with AI models, automation, data, or intelligent systems.</p>
            </div>

            <div className="hh-card">
            <h3>Health</h3>
            <p>Create tools that support wellness, accessibility, or healthcare.</p>
            </div>
        </div>
    </section>


      {/* PRIZES */}
      <section id="prizes" className="hh-section hh-section-alt">
        <h2>Prizes</h2>

        <div className="hh-card" style={{ margin: "0 auto", maxWidth: "600px" }}>
            <p><strong>Best General Track Project</strong></p>
            <p><strong>Best AI/ML Track Project</strong></p>
            <p><strong>Best Health Track Project</strong></p>
            <p><strong>Most Creative Hack</strong></p>
            <p><strong>Best Overall Project</strong></p>
        </div>

        <p className="hh-note">Prize details will be announced soon.</p>
    </section>


      {/* WORKSHOPS & SPEAKERS */}
      <section id="workshops" className="hh-section">
        <h2>Workshops & Speakers</h2>
        <p>
          Throughout the weekend, you’ll have access to technical workshops and
          mentors from industry and academia.
        </p>
        <ul>
          <li>Intro to AI & prompt engineering</li>
          <li>Cybersecurity fundamentals</li>
          <li>APIs, integrations, and deployment</li>
          <li>Pitching your project to judges</li>
        </ul>
        <p className="hh-note">
          Speaker lineup and detailed workshop schedule will be posted soon.
        </p>
      </section>

      {/* RULES & ELIGIBILITY */}
      <section id="rules" className="hh-section hh-section-alt">
        <h2>Rules & Eligibility</h2>
        <ul>
          <li>Team size: 1–4 participants.</li>
          <li>
            Open to all students (Loyola and other colleges/universities).
          </li>
          <li>
            All participants must follow the event Code of Conduct and Loyola
            policies.
          </li>
          <li>
            Projects must be started at the event—existing codebases should be
            clearly disclosed.
          </li>
          <li>
            Tools like AI assistants, APIs, and hardware are allowed unless
            otherwise specified.
          </li>
        </ul>
      </section>

      {/* REGISTRATION SECTION */}
      <section id="register" className="hh-section">
        <h2>Register</h2>
        <p>
          Ready to join HackHounds? Click the button below to complete the
          registration form. You can register as an individual or as a team,
          and you’ll have the opportunity to join a team if you don’t have one
          yet.
        </p>
        <a
          href="https://forms.office.com/r/MDQ63jJ4Ew?origin=lprLink"
          target="_blank"
          rel="noreferrer"
          className="hh-btn hh-btn-primary"
        >
          Go to Registration Form
        </a>
        <p className="hh-note">
          Registration deadline: April 3, 2026 (or until capacity is reached).
        </p>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="hh-section hh-section-alt">
        <h2>Sponsors & Partners</h2>
        <p>
          HackHounds is made possible by support from our sponsors and campus
          partners.
        </p>
        <div className="hh-sponsor-row">
          <div className="hh-sponsor-placeholder">Anthropic</div>
          <div className="hh-sponsor-placeholder">Meta</div>
          <div className="hh-sponsor-placeholder">Loyola University Maryland</div>
          <div className="hh-sponsor-placeholder">Local Partners</div>
        </div>
        <p className="hh-note">
          Interested in sponsoring? Email us at{" "}
          <a href="mailto:hackhounds@loyola.edu">hackhounds@loyola.edu</a>.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="hh-section hh-section-alt">
        <h2>Contact</h2>
        <p>
          Questions about HackHounds? Reach out to the organizing team at{" "}
          <a href="mailto:hackhounds@loyola.edu">hackhounds@loyola.edu</a>.
        </p>
        <p>
          You can also follow Loyola CS & related clubs on social media for
          updates, or join our event Discord (link coming soon).
        </p>
      </section>

      {/* FOOTER */}
      <footer className="hh-footer">
        <p>© {new Date().getFullYear()} HackHounds • Loyola University Maryland</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
};

export default HackHoundsLanding;
