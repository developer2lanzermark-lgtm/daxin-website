import devicesIllustration from "../assets/images/devices-illustration.webp";
import gproLogo from "../assets/images/gpro-logo.png";
import demanderLogo from "../assets/images/demander-logo.png";
import voicebillLogo from "../assets/images/voicebill-logo.jpeg";
import "../styles/FeaturedProducts.css";

const PRODUCTS = [
  {
    name: "gPro",
    logo: gproLogo,
    description: "Organize your billing, inventory, taxation and accounting effortlessly — a premier software solution crafted for wholesale and retail traders.",
  },
  {
    name: "Demander",
    logo: demanderLogo,
    description: "Stay connected with all your buyers and sellers on one smart platform — receive orders without the noise.",
  },
  {
    name: "VoiceBill",
    logo: voicebillLogo,
    description: "An innovative solution for faster retail billing — voice makes billing faster, simpler, and easier.",
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
        </div>
      </div>
    </section>
  );
}
