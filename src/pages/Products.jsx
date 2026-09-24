import gproHero from "../assets/images/PRODUCTS_Hero.webp";
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
            <p className="gpro-hero-subtitle">gPro · Business Management Software</p>
            <h1 className="section-title">One Platform. <br /> Every Part of Your Business.</h1>
            <p className="section-desc">
              gPro brings billing, inventory, taxation, accounting and business
              operations together in one powerful, easy-to-use platform — helping
              wholesale, distribution and retail businesses work smarter every day.
            </p>
            <div className="gpro-hero-buttons">
              <a
                href="https://gprosoftware.com/book-a-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--primary"
              >
                Book a Demo
              </a>
              <a
                href="https://gprosoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gpro-hero-btn gpro-hero-btn--outline"
              >
                Explore Features
              </a>
            </div>
            <p className="gpro-hero-trust">
              Trusted by { CUSTOMERS_COUNT } Businesses across India <span className="gpro-hero-trust-dot">·</span> {  yearsOfExperience }+ Years of Experience
            </p>
          </div>
        </div>
      </section>

      <section className="description-section">
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
      </section>

      <section id="voicebill" className="demander-section voicebill-section">
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
      </section>
    </div>
  );
}
