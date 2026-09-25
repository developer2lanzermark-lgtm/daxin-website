import aboutBg from "../assets/images/ABOUT_1.png";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={aboutBg} alt="Daxin Technologies office building" className="about-hero__image" />
        <div className="about-hero__overlay">
          <div className="about-hero__content">
            <h1 className="section-title">About Us</h1>
            <span className="about-hero__line" aria-hidden="true" />
            <p className="section-desc">
              For more than 27 years, we've taken our own approach to building
              software for real business needs—and provided trusted support to
              our customers with integrity and dedication.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
