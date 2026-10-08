import cultureImg from "../assets/images/careers-culture-sketch.jpg";
import internshipImg from "../assets/images/careers-internship-mentor.png";
import benefitsImg from "../assets/images/careers-benefits-sketch.jpg";
import joinTeamImg from "../assets/images/careers-join-sketch.jpg";
import { yearsOfExperience } from "../config/siteStats.js";
import "../styles/Careers.css";

export default function Careers() {
  return (
    <div className="careers-page">
      {/* SECTION 1: HOME HERO — LEFT TITLE, RIGHT CONTENT, STATS BELOW */}
      <section className="careers-section-hero">
        <div className="careers-hero-light">
          <div className="careers-hero-light-inner">
            <div className="careers-hero-light-left">
              <p className="section-subtitle careers-hero-light-eyebrow">
                We recognize potential.
              </p>
              <h1 className="section-title careers-hero-light-title">
                We give it room to grow.
              </h1>
              <span className="careers-hero-light-rule" aria-hidden="true" />
            </div>
            <div className="careers-hero-light-right">
              <p className="section-desc">
                At DAXIN, we give people the opportunity to learn, contribute,
                take on new challenges, and grow through meaningful work and
                real experience.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text careers-hero-light-cta"
              >
                View Open Roles &amp; Apply
                <span className="careers-btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="careers-stats-bar">
          <div className="careers-stats-container">
            <div className="careers-stat-item">
              <strong>{yearsOfExperience}+ Years</strong>
              <span>Experience That Builds Confidence</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat-item">
              <strong>Always Open</strong>
              <span>To New Talent Across Departments</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat-item">
              <strong>Real Opportunities</strong>
              <span>Learn, Contribute &amp; Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WORKPLACE CULTURE & PHILOSOPHY (RIGHT & LEFT SIDE IMAGES) */}
      <section className="careers-section-culture">
        {/* Right Side Image Block */}
        <div className="careers-split-section careers-split-right">
          <div className="careers-split-container">
            <div className="careers-split-content">
              <h2 className="section-title careers-title--spaced">Where your work matters</h2>
              <p className="section-desc">
                At DAXIN, every role has a purpose. You'll have the
                opportunity to take responsibility, share your ideas, work
                closely with your team, and see how your contribution makes
                a difference.
              </p>
            </div>
            <div className="careers-split-media">
              <div className="careers-image-wrapper">
                <img
                  src={cultureImg}
                  alt="People-first culture at Daxin Technologies"
                  className="careers-split-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Value Props Row — same format as the hero stats, left-aligned */}
        <div className="careers-values-row">
          <div className="careers-values-container">
            <div className="careers-value-item">
              <strong>Take Responsibility</strong>
              <span>Own meaningful work, not just tasks.</span>
            </div>
            <div className="careers-value-divider" />
            <div className="careers-value-item">
              <strong>Be Heard</strong>
              <span>Your ideas and suggestions have a place.</span>
            </div>
            <div className="careers-value-divider" />
            <div className="careers-value-item">
              <strong>Work Together</strong>
              <span>Collaborate closely across roles and teams.</span>
            </div>
            <div className="careers-value-divider" />
            <div className="careers-value-item">
              <strong>Make an Impact</strong>
              <span>See your contribution become part of something real.</span>
            </div>
          </div>
        </div>

        {/* Left Side Image Block */}
        <div className="careers-split-section careers-split-left">
          <div className="careers-split-container">
            <div className="careers-split-media">
              <div className="careers-image-wrapper">
                <img
                  src={internshipImg}
                  alt="Internship and graduate program at Daxin Technologies"
                  className="careers-split-img"
                />
              </div>
            </div>
            <div className="careers-split-content">
              <h2 className="section-title careers-title--spaced">
                More than an Internship
                <br />
                A real opportunity for Graduates
              </h2>
              <p className="section-desc">
                For graduates ready to start their career, our internship
                offers real project experience and hands-on training, with
                an opportunity to join DAXIN permanently based on
                performance.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text careers-explore-btn"
              >
                Apply for Internship
                <span className="careers-btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BENEFITS & PERKS + JOIN OUR TEAM (RIGHT & LEFT SIDE IMAGES) */}
      <section className="careers-section-culture">
        {/* Right Side Image Block */}
        <div className="careers-split-section careers-split-right">
          <div className="careers-split-container">
            <div className="careers-split-content">
              <h2 className="section-title careers-title--spaced">Work Well. Live Well.</h2>
              <p className="section-subtitle careers-title--spaced careers-subtitle--extra-gap">
                A workplace that respects both your work and your time for Life.
              </p>
              <p className="section-desc">
                At DAXIN, we believe people do their best when they have
                meaningful work, fair rewards, and the freedom to make time
                for what matters beyond work.
              </p>
            </div>
            <div className="careers-split-media">
              <div className="careers-image-wrapper">
                <img
                  src={benefitsImg}
                  alt="Benefits and workplace perks at Daxin Technologies"
                  className="careers-split-img"
                />
              </div>
            </div>
          </div>
          <p className="careers-tagline">
            Fair Rewards <span className="careers-tagline-dot" aria-hidden="true">·</span> Time Off <span className="careers-tagline-dot" aria-hidden="true">·</span> Respectful Working Hours
          </p>
          <p className="careers-pride-line">
            Build a career you're proud of, right here in Tirunelveli.
          </p>
        </div>

        {/* Left Side Image Block */}
        <div className="careers-split-section careers-split-left">
          <div className="careers-split-container">
            <div className="careers-split-media">
              <div className="careers-image-wrapper">
                <img
                  src={joinTeamImg}
                  alt="Join the team at Daxin Technologies"
                  className="careers-split-img"
                />
              </div>
            </div>
            <div className="careers-split-content">
              <h2 className="section-title careers-title--spaced">Find Your Place at DAXIN</h2>
              <p className="section-desc">
                From technology and support to marketing, operations, and
                more, discover where your skills can make a difference.
              </p>
              <div className="careers-final-cta">
                <p className="careers-final-cta-text">
                  Your next opportunity could be the start <br /> of something
                  bigger.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text careers-explore-btn"
                >
                  Apply Now
                  <span className="careers-btn-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
