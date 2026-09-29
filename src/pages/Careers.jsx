import careersHeroBg from "../assets/images/careers-hero-bg.jpg";
import cultureImg from "../assets/images/careers-culture-team.jpg";
import internshipImg from "../assets/images/careers-internship-mentor.jpg";
import benefitsImg from "../assets/images/careers-benefits-lounge.jpg";
import joinTeamImg from "../assets/images/careers-join-team.jpg";
import { CUSTOMERS_COUNT, yearsOfExperience } from "../config/siteStats.js";
import "../styles/Careers.css";

const formatStat = (value) =>
  String(value).replace(/\d+/, (n) => Number(n).toLocaleString("en-IN"));

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
              <span className="careers-badge">CAREERS AT DAXIN TECHNOLOGIES</span>
              <h1 className="careers-hero-title">
                Build Software That Powers Businesses
              </h1>
              <p className="careers-hero-subtitle">
                Join us to solve real-world problems in enterprise technology.
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
              <strong>{formatStat(CUSTOMERS_COUNT)}</strong>
              <span>Active Businesses</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat-item">
              <strong>100%</strong>
              <span>Product-Focused</span>
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
              <h2 className="section-title">People-First Culture</h2>
              <p className="section-subtitle">
                Freedom, Ownership, and Technical Mastery
              </p>
              <p className="section-desc">
                We value transparency, open ideas, and collaborative
                problem-solving over rigid hierarchies. Every team member
                has the autonomy to innovate and excel.
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
              <h2 className="section-title">Internship &amp; Graduate Program</h2>
              <p className="section-subtitle">
                Real Projects, Direct Mentorship, and Full-Time Roles
              </p>
              <p className="section-desc">
                Work alongside senior engineers on live software products.
                Gain hands-on industry experience and build a strong
                foundation for your tech career.
              </p>
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
                Comprehensive Support for Your Personal Growth
              </p>
              <p className="section-desc">
                Enjoy competitive compensation, continuous learning
                programs, health benefits, and state-of-the-art tools
                designed to help you thrive.
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
                We are looking for passionate developers, designers, and
                problem solvers. Explore open roles and take the next step
                in your career with Daxin.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
