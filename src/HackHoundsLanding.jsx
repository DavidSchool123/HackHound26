import React from "react";
import "./HackHounds.css"; // optional, for custom styles

const HackHoundsLanding = () => {
  return (
    <div className="hh-root">
    <div className="hh-stars"></div>


  {/* NAV */}
  <nav className="hh-nav">
    <div className="hh-nav-left">
      <span className="hh-nav-title">
        <img src="\hackhound_logo.png" alt="Hack Hound Logo" className="hh-nav-logo" />
        HackHounds ’26
      </span>
    </div>

    <div className="hh-nav-right">
      <a href="#about">About</a>
      <a href="#tracks">Tracks</a>
      <a href="#prizes">Prizes</a>
      <a href="#schedule">Schedule</a>
      <a href="#faq">FAQ</a>
      <a href="#team">Team</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>


  {/* HERO */}
  <header className="hh-hero" id="top">
    <div className="hh-hero-content">

      <h1>HackHounds 2026</h1>
      <p className="hh-tagline">Build. Learn. Create. Join the Pack.</p>
      <p className="hh-hero-meta">April 11–12 • Loyola University Maryland  • 24 Hours</p>
      <p>Join our <a href="https://discord.com/invite/QpuehrKCzB" target="_blank">Discord</a> and <a href="https://www.instagram.com/loyolacyberhounds" target="_blank">Instagram</a></p>
      <p>for more information on the event!</p>

      <a
        href="https://forms.office.com/r/MDQ63jJ4Ew?origin=lprLink"
        target="_blank"
        rel="noreferrer"
        className="hh-btn"
      >
        Register Now
      </a>
    </div>
  </header>




  {/* ABOUT */}
  <section id="about" className="hh-section">
    <h2>About</h2>
    <p>
      HackHounds is Loyola University Maryland’s annual hackathon, a weekend
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

      <div className="hh-tracks-container">

        {/* Top Major Track */}
        <div className="hh-track-card main">
          <h3>Finance</h3>
          <p>Build tools for money, markets, or smarter decisions.</p>
        </div>

        {/* Bottom Two Tracks */}
        <div className="hh-tracks-row">
          <div className="hh-track-card">
            <h3>AI / Machine Learning</h3>
            <p>Build with AI models, automation, or intelligent systems.</p>
          </div>

          <div className="hh-track-card">
            <h3>Health</h3>
            <p>Create tools that support wellness or healthcare.</p>
          </div>
        </div>

        {/* Top Minor Track */}
        <div className="hh-track-card main">
          <h3>General</h3>
          <p>Open‑ended projects across any domain.</p>
        </div>

        {/* Bottom Two Tracks */}
        <div className="hh-tracks-row">
          <div className="hh-track-card">
            <h3>Hardware</h3>
            <p>Hack with sensors, circuits, or devices.</p>
          </div>

          <div className="hh-track-card">
            <h3>CyberSecurity</h3>
            <p>Protect systems, data, and digital spaces.</p>
          </div>
        </div>

      </div>
    </section>


{/* PRIZES */}
<section id="prizes" className="hh-section">
  <h2>Prizes</h2>

  <div className="mainDivStructure"></div>

  <div className="hh-prizes-grid">

    {/* Major Tracks */}
    <div className="hh-prize-card cyan">
      <h3>Best Finance Track</h3>
    </div>

    <div className="hh-prize-card magenta">
      <h3>Best AI/ML Track</h3>
    </div>

    <div className="hh-prize-card purple">
      <h3>Best Health Track</h3>
    </div>

    {/* Minor Tracks */}
    <div className="hh-prize-card green">
      <h3>Best General Track</h3>
    </div>

    <div className="hh-prize-card blue">
      <h3>Best Hardware Track</h3>
    </div>

    <div className="hh-prize-card orange">
      <h3>Best CyberSecurity Track</h3>
    </div>

    {/* Other */}
    <div className="hh-prize-card gold highlight">
      <h3>Best Overall Project</h3>
    </div>

    <div className="hh-prize-card pink highlight">
      <h3>Best Everyday Use</h3>
    </div>

    <div className="hh-prize-card teal highlight">
      <h3>First Time Hack</h3>
    </div>

  </div>

  <p className="hh-note">Prize details will be announced soon.</p>
</section>


{/* SCHEDULE */}
<section id="schedule" className="hh-section">
  <h2>Schedule</h2>

  <div className="hh-schedule">

    {/* SATURDAY BLOCK */}
    <div className="hh-day-block">
      <div className="hh-day-header">
        <h3>Saturday (April 11)</h3>
      </div>

      <div className="hh-card">
        <h4>Morning</h4>
        <p><strong>8–9 AM</strong> — Check‑In</p>
        <p><strong>9–9:30 AM</strong> — Opening Ceremony</p>
        <p><strong>9:30–10 AM</strong> — Team Formation</p>
        <p><strong>10 AM</strong> — Hacking Begins</p>
        <p><strong>10 AM</strong> — Speaker #1</p>
      </div>

      <div className="hh-card">
        <h4>Afternoon</h4>
        <p><strong>12–1 PM</strong> — Brunch</p>
        <p><strong>1–2 PM</strong> — Speaker #2</p>
        <p><strong>2:15–5 PM</strong> — Workshop</p>
      </div>

      <div className="hh-card">
        <h4>Evening</h4>
        <p><strong>6–7 PM</strong> — Dinner</p>
        <p><strong>7–8 PM</strong> — Speaker / Panel</p>
        <p><strong>9 PM–12 AM</strong> — Game Night + Hacking</p>
      </div>

      <div className="hh-card">
        <h4>Late Night</h4>
        <p><strong>12–12:30 AM</strong> — Midnight Snack</p>
        <p><strong>1–7 AM</strong> — Overnight Hacking</p>
      </div>
    </div>

    {/* SUNDAY BLOCK */}
    <div className="hh-day-block">
      <div className="hh-day-header">
        <h3>Sunday (April 12)</h3>
      </div>

      <div className="hh-card">
        <h4>Morning</h4>
        <p><strong>7–8 AM</strong> — Breakfast</p>
        <p><strong>8–10 AM</strong> — Final Sprint</p>
        <p><strong>10 AM</strong> — Hacking Ends</p>
        <p><strong>10-10:30 AM</strong> — Submissions</p>
      </div>

      <div className="hh-card">
        <h4>Presentations</h4>
        <p><strong>10:30 AM–12 PM</strong> — Project Demos</p>
        <p><strong>12–1 PM</strong> — Lunch</p>
        <p><strong>12–2 PM</strong> — Judging</p>
      </div>

      <div className="hh-card">
        <h4>Afternoon</h4>
        <p><strong>1–2 PM</strong> — Career Center Workshop</p>
        <p><strong>3–4 PM</strong> — Awards Ceremony</p>
        <p><strong>4:15 PM</strong> — Event Ends</p>
      </div>
    </div>

  </div>
</section>

  {/* Speaker */}
  <section className="hh-section">
    <h2>SPEAKER TOPICS</h2>

    <div className="hh-grid2">
      <div className="hh-card">
        <h3>Speaker #1</h3>
        <p><strong>Speaker:</strong> Miles Hall & Kelechi Opurum — "AI / Vercel"</p>
      </div>

      <div className="hh-card">
        <h3>Speaker #2</h3>
        <p><strong>Speaker:</strong> Quiana Bannerman — “The Future of Work & Learning with AI”</p>
      </div>

      <div className="hh-card">
        <h3>Game Night</h3>
        <p>Nitendo Game Night & Board Games</p>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section id="faq" className="hh-section">
    <h2>FAQ</h2>

    <div className="hh-grid2">
      <div className="hh-card">
        <h3>Do I need experience?</h3>
        <p>No: HackHounds is beginner‑friendly.</p>
      </div>

      <div className="hh-card">
        <h3>Is it free?</h3>
        <p>Yes, participation is completely free.</p>
      </div>

      <div className="hh-card">
        <h3>Do I need a team?</h3>
        <p>You can come solo: we’ll help you join a team.</p>
      </div>

      <div className="hh-card">
        <h3>What should I bring?</h3>
        <p>A laptop, charger, and your creativity.</p>
      </div>
    </div>
  </section>

{/* TEAM */}
{/* TODO: replace role, with linkeldn and github */}
<section id="team" className="hh-section">
  <h2>Team</h2>
  <p>Meet the organizers behind HackHounds.</p>

  <div className="hh-grid">

    {/* Milles */}
    <div className="hh-card">
      <img src="\team_pic\mileH.jpg" alt="Miles Hall" className="hh-team-logo" />
      <h3>Miles Hall</h3>
      <p>Organizer</p>
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/miles-hall1/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* DAVID OGUNBANJO */}
    <div className="hh-card">
      <img src="\team_pic\DavidO.jpg" alt="David Ogunbanjo" className="hh-team-logo" />
      <h3>David Ogunbanjo</h3>
      <p>Organizer</p> 
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/david-ogunbanjo-987bb720b/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* AIDAN */}
    <div className="hh-card">
      <img src="\team_pic\aidanM.jpg" alt="Aidan Marshall" className="hh-team-logo" />
      <h3>Aidan Marshall</h3>
      <p>Host Club</p>
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/aidan-r-marshall/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* Kelechi Opurum */}
    <div className="hh-card">
      <img src="\team_pic\kelechiO.jpg" alt="vilnis" className="hh-team-logo" />
      <h3>Kelechi Opurum</h3>
      <p>Host Club</p>
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/kelechi-opurum/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* vilnis */}
    <div className="hh-card">
      <img src="\team_pic\vilnisJ.jpg" alt="Kelechi " className="hh-team-logo" />
      <h3>Vilnis Jatnieks</h3>
      <p>Host Club</p>
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/vilnis-jatnieks/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* John */}
    <div className="hh-card">
      <img src="\team_pic\johnN.jpg" alt="John Nweke" className="hh-team-logo" />
      <h3>John Nweke</h3>
      <p>CS Faculty</p>
      <div className="hh-contact">
      <a href="https://www.linkedin.com/in/johnnweke/" target="_blank" rel="noopener noreferrer">
        <img src="\link_logo.png" alt="linkdlen" className="contact-icon" />
      </a>
    </div>
    </div>

    {/* DAVID OPITZ */}
    <div className="hh-card">
      <img src="\team_pic\DaveO.png" alt="David Opitz" className="hh-team-logo" />
      <h3>David Opitz</h3>
      <p>CS Faculty</p>
    </div>

  </div>
</section>

    {/* SPONSORS */}
  <section id="sponsors" className="hh-section">
    <h2>Sponsors</h2>

    <div className="hh-grid">
      <div className="hh-card">
        <img src="\nas_logo.jpg" alt="NAS Logo" className="hh-sponsor-logo" />
        <p>NAS</p>
      </div>

      <div className="hh-card">
        <img src="\acm_logo.png" alt="ACM Logo" className="hh-sponsor-logo" />
        <p>ACM</p>
      </div>

      <div className="hh-card">
        <img src="\cyber_logo.png" alt="Cybersecurity Logo" className="hh-sponsor-logo" />
        <p>Cyber Hounds</p>
      </div>

      <div className="hh-card">
        <img src="\TE_logo.png" alt="Teacher Education Logo" className="hh-sponsor-logo" />
        <p>Teacher Education</p>
      </div>

      <div className="hh-card">
        <img src="\colorStack_logo.png" alt="colorstack logo" className="hh-sponsor-logo" />
        <p>COLORSTACK</p>
      </div>
    </div>

    <p className="hh-note">Interested in sponsoring? Email us.</p>
  </section>


  {/* CONTACT */}
  <section id="contact" className="hh-section">
    <h2>Contact</h2>
    <p>Questions? Reach out at:</p>
    <div className="hh-contact">
      <a href="https://discord.gg/QpuehrKCzB" target="_blank" rel="noopener noreferrer">
        <img src="\discord_logo.png" alt="Discord" className="contact-icon" />
      </a>

      <a href="https://www.instagram.com/loyolacyberhounds" target="_blank" rel="noopener noreferrer">
        <img src="\instagram_logo.png" alt="Instagram" className="contact-icon" />
      </a>
    </div>

  </section>

  {/* FOOTER */}
  <footer className="hh-footer">
    <p>© 2026 HackHounds • Loyola University Maryland</p>
  </footer>

</div>

  );
};

export default HackHoundsLanding;
