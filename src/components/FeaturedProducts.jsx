import { Link } from "react-router-dom";
import devicesIllustration from "../assets/images/devices-illustration.webp";
import gproLogo from "../assets/images/gpro-logo.png";
import demanderLogo from "../assets/images/demander-logo.png";
import voicebillLogo from "../assets/images/voicebill-logo.png";
import "../styles/FeaturedProducts.css";

const PRODUCTS = [
  {
    name: "gPro",
    logo: gproLogo,
    description: "A simple, powerful business management software designed for modern businesses.",
  },
  {
    name: "Demander",
    logo: demanderLogo,
    description: "Connecting businesses for orders beyond expectations.",
  },
  {
    name: "VoiceBill",
    logo: voicebillLogo,
    description: "Simply speak, simply bill. An innovative solution for faster retail billing.",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="featured">
      <div className="featured__card">
        <img
          src={devicesIllustration}
          alt="Daxin products across mobile, tablet, and desktop"
          className="featured__image"
        />
      </div>

      <div className="featured__list">
        <div className="featured__list-header">
          <span>OUR PRODUCTS</span>
        </div>

        <hr className="featured__divider" />

        <div className="featured__grid">
          {PRODUCTS.map((product) => (
            <div className="featured__item" key={product.name}>
              <img
                src={product.logo}
                alt={`${product.name} logo`}
                className={`featured__item-icon featured__item-icon--${product.name.toLowerCase()}`}
              />
              <div>
                <p className="featured__item-desc">{product.description}</p>
              </div>
            </div>
          ))}

          <Link to="/products" className="featured__explore">
            Explore it &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
