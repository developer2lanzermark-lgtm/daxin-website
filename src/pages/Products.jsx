import gproHero from "../assets/images/PRODUCTS_Hero.webp";
import voicebillBg from "../assets/images/PRODUCTS_03.webp";
import demanderBg from "../assets/images/PRODUCTS_02.webp";
import demanderHero from "../assets/images/demander-hero.png";
import voicebillHero from "../assets/images/voicebill-hero.jpeg";
import demanderLogo from "../assets/images/demander-logo.png";
import voicebillLogo from "../assets/images/voicebill-logo.png";
import "../styles/Products.css";

import { CUSTOMERS_COUNT,  yearsOfExperience } from '../config/siteStats.js'


export default function Products() {
  return (
    <div className="products-page">
      <section className="image-background-section">
        <img src={gproHero} alt="gPro business solution" className="image-background" />
        <div className="image-overlay">
          <div className="gpro-hero-content">
            <p className="section-eyebrow">gPro · Business Management Software</p>
            <h1 className="section-title">One Platform. <br /> Every Part of Your Business.</h1>
            <p className="section-desc gpro-hero-description">
              gPro brings billing, inventory, taxation, accounting and business
              operations together in one powerful, easy-to-use platform — helping
              wholesale, distribution and retail businesses work smarter every day.
            </p>
            <div className="gpro-hero-buttons">
              <a
                href="https://gprosoftware.com/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--primary  btn-text"
              >
                Book a Demo
              </a>
              <a
                href="https://gprosoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--outline btn-text"
              >
                Explore Features
              </a>
            </div>
            <p className="gpro-hero-trust support-line">
              Trusted by { CUSTOMERS_COUNT } Businesses across India <span className="gpro-hero-trust-dot">·</span> {  yearsOfExperience }+ Years of Experience
            </p>
          </div>
        </div>
      </section>

      <section className="image-background-section demander-hero-section">
        <img src={demanderBg} alt="Demander smart ordering platform" className="image-background" />
        <div className="image-overlay">
          <div className="demander-hero-content">
            <p className="section-eyebrow">Demander · Smart Ordering Platform</p>
            <h2 className="section-title">
              Connecting Businesses Beyond Calls Chats Visits and Emails
            </h2>
            <h3 className="section-subtitle">
              A smarter way to receive manage and track every order
            </h3>
            <p className="section-desc">
              Demander brings buyers and sellers together on one connected platform,
              making it easier to receive, manage and track orders without the
              everyday friction of scattered conversations.
            </p>
            <p className="demander-support-line">Receive Orders Without the Noise</p>
            <div className="gpro-hero-buttons demander-hero-buttons">
              <a
                href="https://demander.app/aptadmin/src/app/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--outline btn-text"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="image-background-section voicebill-hero-section">
        <img src={voicebillBg} alt="Voice Bill mobile billing app" className="image-background" />
        <div className="image-overlay">
          <div className="voicebill-hero-top">
            <img src={voicebillLogo} alt="Voice Bill logo" className="voicebill-hero-logo" />
            <h2 className="section-title">Simply Speak, Simply Bill</h2>
          </div>
          <h3 className="section-subtitle voicebill-hero-subtitle">
            An innovative solution for faster retail billing
          </h3>
          <div className="voicebill-hero-bottom">
            <p className="section-desc">
              Built for busy retail counters, Voice Bill mobile app makes billing faster,
              simpler, and easier —<br />so you can serve more customers with less effort.
            </p>
            <div className="gpro-hero-buttons voicebill-hero-buttons">
              <a
                href="https://copanel.voicebill.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--outline btn-text"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="description-section">
        <div className="description-container">
          <div className="description-content">
            <h2 className="product-subtitle">
              Power your business with the elite billing solution
              <br />
              <span>Your business, simplified!</span>
            </h2>
            <p className="product-description">
              Organize your billing, inventory, taxation and accounting
              effortlessly with our premier technology software solution
              crafted for wholesale and retail traders.
            </p>
          </div>

          <div className="button-container">
            <a
              href="https://gprosoftware.com/"
              className="btn-custom btn-primary-custom"
            >
              Explore it
            </a>
          </div>
        </div>
      </section>

      <section id="demander" className="demander-section">
        <div className="demander-container">
          <div className="demander-left">
            <img src={demanderHero} alt="Demander platform" className="demander-image" />
          </div>
          <div className="demander-right">
            <div className="demander-logo">
              <img src={demanderLogo} alt="Demander logo" className="logo-image" />
            </div>
            <div className="demander-content">
              <h2 className="demander-title">
                Connecting Businesses
                <br />
                for orders beyond expectations
              </h2>
              <p className="demander-subtitle">
                Stay connected with all your buyers and sellers on one smart
                platform.
                <br />
                <br />
                Say goodbye to phone calls, WhatsApp chats, emails, manual
                notes, and sales visits in your order process.
                <br />
                <br />
                <em>Receive Orders Without the Noise!</em>
              </p>
            </div>
            <div className="Explore-button-wrapper">
              <a
                href="https://demander.app/aptadmin/src/app/login.php"
                className="explore-btn"
              >
                Explore it
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="voicebill" className="demander-section voicebill-section">
        <div className="demander-container">
          <div className="demander-left">
            <img src={voicebillHero} alt="Voice Bill app" className="voicebill-image" />
          </div>
          <div className="demander-right">
            <div className="demander-logo">
              <img src={voicebillLogo} alt="Voice Bill logo" className="voicebill-logo-image" />
            </div>
            <div className="demander-content">
              <h2 className="demander-title voicebill-title">Simply Speak, Simply Bill</h2>
              <p className="demander-subtitle">
                <span className="voicebill-highlight">
                  An Innovative Solution for Faster Retail Billing
                </span>
                Built for busy retail counters, Voice Bill mobile app makes
                billing faster, simpler, and easier—so you can serve more
                customers with less effort.
              </p>
            </div>
            <div className="Explore-button-wrapper">
              <a
                href="https://copanel.voicebill.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-btn"
              >
                Explore it
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
