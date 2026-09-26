import aboutStoryImg from "../assets/images/ABOUT_US_01.webp";
import aboutUsImg from "../assets/images/ABOUT_US_02.webp";
import aboutBuildImg from "../assets/images/ABOUT_US_03.webp";
import aboutCraftImg from "../assets/images/ABOUT_US_04.webp";
import aboutSoftwareImg from "../assets/images/ABOUT_US_05.webp";
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

      <section className="about-build">
        <div className="about-build__inner">
          <img
            src={aboutBuildImg}
            alt="Daxin Technologies builds software for businesses"
            className="about-build__image"
          />
          <div className="about-build__content">
            <h2 className="section-title">We Build Software for Businesses</h2>
            <span className="about-hero__line" aria-hidden="true" />
            <p className="section-desc">
              DAXIN Technologies is a software product company, building and
              evolving our own products to help businesses work simpler,
              smarter and better.
            </p>
          </div>
        </div>
      </section>

      <section className="about-craft">
        <div className="about-craft__content">
          <p className="section-desc">
            Creating great software is an art, and it takes dedication.
            <br />
            Years of experience help us create products that deliver real value
            to our <br /> customers.
          </p>
          <p className="section-desc">
            Earning Business Confidence matters more than revenue alone.
          </p>
          <p className="section-subtitle">
            Our Craft · Our Integrity · Our Passion
          </p>
        </div>
        <img
          src={aboutCraftImg}
          alt="Our craft, our integrity, our passion"
          className="about-craft__image"
        />
      </section>

      <section className="about-software">
        <div className="about-software__content">
          <h2 className="section-title">Software We Build</h2>
          <p className="section-desc">
            We build practical software products that simplify everyday
            business.
          </p>
          <ul className="about-software__list section-desc">
            <li>gPro</li>
            <li>Demander</li>
            <li>VoiceBill</li>
            <li>The Next Build...</li>
          </ul>
        </div>
        <img
          src={aboutSoftwareImg}
          alt="Software products built by Daxin Technologies"
          className="about-software__image"
        />
      </section>
    </div>
  );
}
