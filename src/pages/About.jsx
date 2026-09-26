import aboutStoryImg from "../assets/images/ABOUT_US_01.webp";
import aboutUsImg from "../assets/images/ABOUT_US_02.webp";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-story">
        <div className="about-story__content">
          <h1 className="section-title">The Story <br /> Behind Daxin Technologies</h1>
          <p className="section-desc">
            In the 1990s, in a small shop in Tirunelveli, at the southern tip of
            India, we started with computer training and project guidance for
            students. As our experience grew, so did an idea: “Build smart
            software to help businesses work better.” Over the years, that idea
            evolved into the trusted technology company we are today.
          </p>
        </div>
        <img
          src={aboutStoryImg}
          alt="The story behind Daxin Technologies"
          className="about-story__image"
        />
      </section>

      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__content">
            <h2 className="section-title">About Us</h2>
            <span className="about-hero__line" aria-hidden="true" />
            <p className="section-desc">
              For more than 27 years, we've taken our own approach to building
              software for real business needs—and provided trusted support to
              our customers with integrity and dedication.
            </p>
          </div>
          <img
            src={aboutUsImg}
            alt="About Daxin Technologies"
            className="about-hero__image"
          />
        </div>
      </section>
    </div>
  );
}
