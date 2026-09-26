import aboutStoryImg from "../assets/images/ABOUT_US_01.webp";
import aboutUsImg from "../assets/images/ABOUT_US_02.webp";
import aboutBuildImg from "../assets/images/ABOUT_US_03.webp";
import aboutCraftImg from "../assets/images/ABOUT_US_04.webp";
import aboutSoftwareImg from "../assets/images/ABOUT_US_05.webp";
import aboutJourneyImg from "../assets/images/ABOUT_US_06.webp";
import gproLogo from "../assets/images/gPro_LOGO-RED-TITLE-WEB-2026.webp";
import demanderLogo from "../assets/images/DEMANDER LOGO-PNG.png";
import voicebillLogo from "../assets/images/voicebill-logo.png";
import { Link } from "react-router-dom";
import "../styles/About.css";
import "../styles/FeaturedProducts.css";

import aboutTodayBg from "../assets/images/ABOUT_US_07.webp";
import {
  CUSTOMERS_COUNT,
  PRODUCTS_COUNT,
  PARTNERS_COUNT,
  yearsOfExperience,
} from '../config/siteStats.js'

// "15000+" -> "15,000+"
const formatStat = (value) =>
  String(value).replace(/\d+/, (n) => Number(n).toLocaleString("en-IN"));

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const todayStats = [
  {
    value: formatStat(CUSTOMERS_COUNT),
    label: "Businesses",
    tone: "blue",
    icon: (
      <svg {...svgProps}>
        <circle cx="12" cy="8" r="3" />
        <circle cx="5.5" cy="10" r="2.2" />
        <circle cx="18.5" cy="10" r="2.2" />
        <path d="M6.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M2 18.5a3.8 3.8 0 0 1 4.2-3.7" />
        <path d="M22 18.5a3.8 3.8 0 0 0-4.2-3.7" />
      </svg>
    ),
  },
  {
    value: formatStat(PRODUCTS_COUNT),
    label: "Products",
    tone: "green",
    icon: (
      <svg {...svgProps}>
        <path d="M12 2.5 15.5 4.5v4L12 10.5 8.5 8.5v-4z" />
        <path d="M8.5 4.5 12 6.5l3.5-2M12 6.5v4" />
        <path d="M7 11.5 10.5 13.5v4L7 19.5 3.5 17.5v-4z" />
        <path d="M3.5 13.5 7 15.5l3.5-2M7 15.5v4" />
        <path d="M17 11.5 20.5 13.5v4L17 19.5 13.5 17.5v-4z" />
        <path d="M13.5 13.5 17 15.5l3.5-2M17 15.5v4" />
      </svg>
    ),
  },
  {
    value: `${yearsOfExperience}+`,
    label: "Years",
    tone: "purple",
    icon: (
      <svg {...svgProps}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        <path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01M16 16.5h.01" />
      </svg>
    ),
  },
  {
    value: formatStat(PARTNERS_COUNT),
    label: "Partners",
    tone: "orange",
    icon: (
      <svg {...svgProps}>
        <path d="M2 11l3.5-3.5L9 9l3-1.5 3 1.5 3.5-1.5L22 11" />
        <path d="M5.5 7.5 2 11l6 6.5c.8.8 2 .8 2.8 0" />
        <path d="M18.5 7.5 22 11l-6 6.5c-.8.8-2 .8-2.8 0L8.5 12.8" />
        <path d="M12 7.5 9.2 10.3a1.4 1.4 0 0 0 2 2L13.5 10" />
      </svg>
    ),
  },
];


export default function About() {
  return (
    <div className="about-page">
      <section className="about-story">
        <div className="about-story__content">
          <h1 className="section-title">We are Daxin <br /> This is our story</h1>
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
            <h2 className="section-title">We Build Software for Growing Businesses</h2>
            <span className="about-hero__line" aria-hidden="true" />
            <p className="section-desc">
              DAXIN Technologies is a software product company, building and
              evolving our own products to help growing businesses work simpler,
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
          <p className="section-subtitle">
            Earning Business Confidence matters more than revenue alone.
          </p>
        </div>
        <div className="about-craft__showcase">
          <p className="section-craft-integrity">
            Our Craft
            <span className="about-craft__sep" aria-hidden="true">·</span>
            Our Integrity
            <span className="about-craft__sep" aria-hidden="true">·</span>
            Our Passion
          </p>
          <img
            src={aboutCraftImg}
            alt="Our craft, our integrity, our passion"
            className="about-craft__image"
          />
        </div>
      </section>

      <section className="about-software">
        <div className="about-software__content">
          <h2 className="section-title">Software We Build</h2>
          <p className="section-desc">
            We build practical software products that simplify everyday
            business.
          </p>
        </div>
        <div className="about-software__showcase">
          <ul className="about-software__list">
            <li>
              <img src={gproLogo} alt="gPro" className="about-software__logo" />
            </li>
            <li>
              <img src={demanderLogo} alt="Demander" className="about-software__logo" />
            </li>
            <li>
              <img src={voicebillLogo} alt="VoiceBill" className="about-software__logo" />
            </li>
          </ul>
          <img
            src={aboutSoftwareImg}
            alt="Software products built by Daxin Technologies"
            className="about-software__image"
          />
          <div className="featured__cta">
            <Link to="/products" className="featured__explore">
              <span>Explore Products</span>
              <span className="featured__explore-arrow" aria-hidden="true">&gt;</span>
            </Link>
          </div>
        </div>
        <p className="section-desc about-software__next">The Next Build...</p>
      </section>

      <section className="about-journey">
        <div className="about-journey__content">
          <h2 className="section-title">Since 1998. Still Building.</h2>
          <p className="section-desc">
            {yearsOfExperience}+ years of learning, building and
            improving—always staying close <br /> to the businesses we serve.
          </p>
        </div>
        <div className="about-journey__showcase">
          <img
            src={aboutJourneyImg}
            alt="Daxin Technologies journey since 1998"
            className="about-journey__image"
          />
          <ol className="about-journey__steps">
            <li>
              <h3 className="section-title about-journey__year">1998</h3>
              <p className="section-desc">Where It Started</p>
            </li>
            <li>
              <h3 className="section-title">Experience</h3>
              <p className="section-desc">
                Learning from <br /> Real Businesses
              </p>
            </li>
            <li>
              <h3 className="section-title">Today</h3>
              <p className="section-desc">
                Building &amp; <br /> Improving Products
              </p>
            </li>
            <li>
              <h3 className="section-title">What’s Next</h3>
              <p className="section-desc">
                Building for <br /> the Future
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="about-today"
        style={{ "--about-today-bg": `url(${aboutTodayBg})` }}
      >
        <div className="about-today__content">
          <h2 className="section-title about-today__title">
            <span className="about-today__brand">DAXIN</span> Today
          </h2>
          <p className="section-subtitle about-today__subtitle">
            A Product Company With a Long-Term View
          </p>
          <p className="section-desc">
            Today, DAXIN Technologies continues to build software products for
            growing businesses, combining decades of business experience with
            evolving technology.
          </p>
          <p className="section-desc">
            Our focus remains the same: build useful products, keep improving
            them, and stand beside the businesses that rely on them.
          </p>
          <ul className="about-today__stats">
            {todayStats.map((stat) => (
              <li key={stat.label} className="about-today__stat">
                <span className={`about-today__icon about-today__icon--${stat.tone}`}>
                  {stat.icon}
                </span>
                <strong className="about-today__value">{stat.value}</strong>
                <span className="about-today__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
