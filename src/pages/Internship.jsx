import { useState } from "react";
import { Link } from "react-router-dom";
import careersHeroBg from "../assets/images/careers-hero-bg.jpg";
import cultureImg from "../assets/images/careers-culture-team.jpg";
import internshipImg from "../assets/images/careers-internship-mentor.jpg";
import CareerApplyModal from "../components/CareerApplyModal";
import "../styles/Internship.css";

const INTERNSHIP_TRACKS = [
  {
    id: "fs-intern",
    title: "Full-Stack Web Engineering",
    desc: "Build APIs, web dashboards, and enterprise modules for gPro ERP.",
    tags: ["React", "Node.js", "SQL", "REST APIs"],
  },
  {
    id: "ai-intern",
    title: "AI & Voice Technologies",
    desc: "Work on speech recognition and voice-assisted billing models for Voice Bill.",
    tags: ["Python", "Speech AI", "Voice Bill", "WebSockets"],
  },
  {
    id: "mobile-intern",
    title: "Mobile App Development",
    desc: "Develop mobile ordering and stock management features for Demander.",
    tags: ["React Native", "Flutter", "Android", "Mobile UI"],
  },
  {
    id: "uiux-intern",
    title: "UI/UX & Product Design",
    desc: "Design clean, accessible interfaces for business users across mobile and web.",
    tags: ["Figma", "Wireframing", "User Testing", "Prototyping"],
  },
];

export default function Internship() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (trackTitle) => {
    setSelectedTrack(`Internship - ${trackTitle}`);
    setIsModalOpen(true);
  };

  return (
    <div className="internship-page">
      {/* Cover Banner (No word overlap on background cover image) */}
      <section
        className="internship-hero-cover"
        style={{ backgroundImage: `url(${careersHeroBg})` }}
      >
        <div className="internship-hero-overlay" />
        <div className="internship-hero-container">
          <div className="internship-hero-glass-card">
            <span className="internship-badge">DAXIN INTERNSHIP PROGRAM 2026</span>
            <h1 className="internship-hero-title">
              Launch Your Career on Real Production Code
            </h1>
            <p className="internship-hero-subtitle">
              No dummy projects. No coffee runs. Work alongside experienced architects
              building software products used by thousands of businesses.
            </p>
            <div className="internship-hero-actions">
              <button
                className="internship-primary-btn"
                onClick={() => handleApplyClick("General Internship")}
              >
                Apply for Internship 2026 →
              </button>
              <Link to="/careers" className="internship-secondary-btn">
                Explore Full-Time Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Strip */}
      <div className="internship-highlights-strip">
        <div className="internship-highlights-container">
          <div className="internship-highlight-item">
            <strong>3 - 6 Months</strong>
            <span>Hands-on Duration</span>
          </div>
          <div className="internship-highlight-divider" />
          <div className="internship-highlight-item">
            <strong>1-on-1 Mentorship</strong>
            <span>Senior Architect Guidance</span>
          </div>
          <div className="internship-highlight-divider" />
          <div className="internship-highlight-item">
            <strong>Competitive Stipend</strong>
            <span>Plus PPO Opportunities</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: Internship Experience (IMAGE ON LEFT SIDE) */}
      <section className="internship-split-section internship-split-left">
        <div className="internship-split-container">
          <div className="internship-split-media">
            <div className="internship-image-wrapper">
              <img
                src={internshipImg}
                alt="Students and mentors at Daxin Technologies"
                className="internship-split-img"
              />
              <div className="internship-media-badge">
                <span>Real Software Development</span>
              </div>
            </div>
          </div>
          <div className="internship-split-content">
            <span className="internship-section-eyebrow">THE EXPERIENCE</span>
            <h2 className="internship-section-title">
              Real Projects, Real Production Impact
            </h2>
            <p className="internship-section-desc">
              We started Daxin in the 1990s by training and guiding students. That
              commitment to student growth is built into our company DNA.
            </p>
            <ul className="internship-feature-list">
              <li>
                <span className="internship-feature-icon">💻</span>
                <div>
                  <strong>Live Production Contribution:</strong> Features you build will
                  be deployed to live products like gPro ERP and Demander.
                </div>
              </li>
              <li>
                <span className="internship-feature-icon">🧠</span>
                <div>
                  <strong>Dedicated Mentorship:</strong> Learn architecture, git workflows,
                  clean code standards, and database optimization directly from core engineers.
                </div>
              </li>
              <li>
                <span className="internship-feature-icon">🏆</span>
                <div>
                  <strong>Pre-Placement Offer (PPO):</strong> Exceptional interns receive
                  direct full-time job offers upon graduation.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: Internship Tracks (IMAGE ON RIGHT SIDE) */}
      <section className="internship-split-section internship-split-right">
        <div className="internship-split-container">
          <div className="internship-split-content">
            <span className="internship-section-eyebrow">CHOOSE YOUR PATH</span>
            <h2 className="internship-section-title">
              Available Internship Tracks
            </h2>
            <p className="internship-section-desc">
              Select the domain that aligns with your passions and build portfolio-grade engineering experience.
            </p>

            <div className="internship-tracks-list">
              {INTERNSHIP_TRACKS.map((track) => (
                <div key={track.id} className="internship-track-card">
                  <div className="internship-track-info">
                    <h4>{track.title}</h4>
                    <p>{track.desc}</p>
                    <div className="internship-track-tags">
                      {track.tags.map((tag) => (
                        <span key={tag} className="internship-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="internship-track-apply-btn"
                    onClick={() => handleApplyClick(track.title)}
                  >
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="internship-split-media">
            <div className="internship-image-wrapper">
              <img
                src={cultureImg}
                alt="Building software products at Daxin"
                className="internship-split-img"
              />
              <div className="internship-media-badge">
                <span>gPro · Demander · Voice Bill</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Eligibility & Benefits */}
      <section className="internship-details-section">
        <div className="internship-details-container">
          <div className="internship-details-header">
            <span className="internship-section-eyebrow">ELIGIBILITY &amp; PERKS</span>
            <h2 className="internship-section-title">What We Offer &amp; Expect</h2>
          </div>
          <div className="internship-details-grid">
            <div className="internship-detail-card">
              <div className="internship-card-icon">🎓</div>
              <h3>Who Can Apply?</h3>
              <p>
                Final year / pre-final year students (B.E / B.Tech / B.Sc / MCA) or enthusiastic self-taught developers with strong programming fundamentals.
              </p>
            </div>
            <div className="internship-detail-card">
              <div className="internship-card-icon">💵</div>
              <h3>Stipend &amp; Perks</h3>
              <p>
                Monthly stipend during the internship, official experience certificate, flexible working hours, and mentorship support.
              </p>
            </div>
            <div className="internship-detail-card">
              <div className="internship-card-icon">🚀</div>
              <h3>Conversion to Full-Time</h3>
              <p>
                Top-performing interns are offered full-time software engineering roles at Daxin upon internship completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Application Process */}
      <section className="internship-steps-section">
        <div className="internship-steps-container">
          <div className="internship-steps-header">
            <span className="internship-section-eyebrow">HOW TO APPLY</span>
            <h2 className="internship-section-title">Simple 3-Step Selection Process</h2>
          </div>

          <div className="internship-steps-grid">
            <div className="internship-step-card">
              <div className="internship-step-num">01</div>
              <h3>Submit Application</h3>
              <p>Fill out our short online form with your details, GitHub/Portfolio, and track preference.</p>
            </div>
            <div className="internship-step-card">
              <div className="internship-step-num">02</div>
              <h3>Practical Coding Challenge</h3>
              <p>Solve a small, real-world mini coding assignment to showcase your problem-solving approach.</p>
            </div>
            <div className="internship-step-card">
              <div className="internship-step-num">03</div>
              <h3>Technical Discussion &amp; Offer</h3>
              <p>A quick 1-on-1 interview with our engineering mentor followed by internship onboarding.</p>
            </div>
          </div>

          <div className="internship-steps-cta">
            <button
              className="internship-primary-btn"
              onClick={() => handleApplyClick("General Internship 2026")}
            >
              Start Internship Application →
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <CareerApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleTitle={selectedTrack || "Internship Program 2026"}
      />
    </div>
  );
}
