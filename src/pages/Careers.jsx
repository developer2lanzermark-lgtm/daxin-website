import careersHeroBg from "../assets/images/careers-hero-bg.jpg";
import cultureImg from "../assets/images/careers-culture-sketch.jpg";
import internshipImg from "../assets/images/careers-internship-mentor.png";
import benefitsImg from "../assets/images/careers-benefits-sketch.jpg";
import joinTeamImg from "../assets/images/careers-join-sketch.jpg";
import { yearsOfExperience } from "../config/siteStats.js";
import "../styles/Careers.css";

export default function Careers() {
  return (
    <div className="careers-page">
      {/* SECTION 1: HERO COVER BANNER & BRAND STATS */}
      <section className="careers-section-hero">
        <div
          className="careers-hero-cover"
          style={{ backgroundImage: `url(${careersHeroBg})` }}
        >
          <div className="careers-hero-overlay" />
          <div className="careers-hero-container">
            <div className="careers-hero-glass-card">
              <span className="careers-badge">WE'RE HIRING</span>
              <h1 className="careers-hero-title">
                Your Next Big Career Move Starts Here
              </h1>
              <p className="careers-hero-subtitle">
                Looking for the right opportunity? Join a growing team that
                truly backs your ideas from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="careers-stats-bar">
          <div className="careers-stats-container">
            <div className="careers-stat-item">
              <strong>{yearsOfExperience}+ Years</strong>
              <span>Product Heritage</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat-item">
              <strong>Always</strong>
              <span>Open to Great Talent</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat-item">
              <strong>Open</strong>
              <span>To Every Department</span>
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
              <h2 className="section-title">A Place Where You Can Grow</h2>
              <p className="section-subtitle">
                What Every Team Member Can Expect Here
              </p>
              <p className="section-desc">
                Daxin has been a product company since 1998 — every team
                member owns real responsibility and talks directly to the
                people who decide what happens next.
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
              <h2 className="section-title">Internship, With a Real Future</h2>
              <p className="section-subtitle">
                Built for Job Seekers
              </p>
              <p className="section-desc">
                Built for software development job seekers. It runs 6
                months to 1 year based on your skill and ability — and if
                eligible, the role becomes permanent.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="careers-explore-btn"
              >
                Apply for Internship →
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
              <h2 className="section-title">Rewards &amp; Work-Life Harmony</h2>
              <p className="section-subtitle">
                Fair Pay, Real Time Off, No Metro-City Grind
              </p>
              <p className="section-desc">
                A fair monthly stipend, festival and personal leave, and
                working hours that don't bleed into your evenings — this is
                a Tirunelveli-rooted team, not a burnout culture.
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
              <h2 className="section-title">Explore Opportunities</h2>
              <p className="section-subtitle">
                Simple, Merit-Based, and Candidate-Friendly Hiring
              </p>
              <p className="section-desc">
                Passionate about building real software? Take the next
                step and apply in minutes.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="careers-explore-btn"
              >
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
