import principlesBg from "../assets/images/principles-bg.webp";
import qualityIcon from "../assets/images/principle-quality.webp";
import integrityIcon from "../assets/images/principle-integrity.webp";
import handshakeIcon from "../assets/images/principle-handshake.webp";
import targetIcon from "../assets/images/principle-target.webp";
import "../styles/Principles.css";

const PRINCIPLES = [
  {
    id: "quality",
    tone: "rose",
    number: "01",
    title: "Uncompromising Quality",
    tagline: "Products customers can rely on.",
    body: "We never compromise on quality. We build dependable products and continuously pursue product excellence.",
    icon: qualityIcon,
  },
  {
    id: "integrity",
    tone: "blue",
    number: "02",
    title: "Integrity",
    tagline: "We always do what is right.",
    body: "We believe in being honest, transparent and genuine—with no false promises or hidden agenda. We keep our word and take responsibility for our actions.",
    icon: integrityIcon,
  },
  {
    id: "commitment",
    tone: "green",
    number: "03",
    title: "Commitment",
    tagline: "We stand beside our customers.",
    body: "We honour our promises with ownership, dedication and genuine care. We believe in responsive support, long-term relationships and seeing things through.",
    icon: handshakeIcon,
  },
];

export default function Principles() {
  return (
    <section className="principles" aria-labelledby="principles-title">
      <div
        className="principles__hero"
        style={{ backgroundImage: `url(${principlesBg})` }}
        role="img"
        aria-label="Business Confidence is our North Star"
      ></div>

      <div className="principles__inner">
        <header className="principles__head">
          <h2 id="principles-title" className="section-title principles__title">
            The Principles That Guide Us
          </h2>
          <p className="section-subtitle principles__subtitle">
            Business Confidence is at the heart of everything we do.
          </p>
          <span className="principles__rule" aria-hidden="true"></span>
          <p className="section-desc principles__lead">
            It is earned through the quality of our products, the integrity of our decisions,{" "}
            <br />
            and the commitments we keep.
          </p>
        </header>

        <div className="principles__grid">
          {PRINCIPLES.map((item) => (
            <article
              key={item.id}
              className={`principles__card principles__card--${item.tone}`}
            >
              <div className="principles__card-top">
                <span className="principles__icon">
                  <img src={item.icon} alt="" />
                </span>
                <div className="principles__card-heading">
                  <span className="principles__num">
                    <span>{item.number}</span>
                    <i aria-hidden="true"></i>
                  </span>
                  <h3 className="principles__card-title">{item.title}</h3>
                </div>
              </div>

              <p className="support-line principles__tagline">{item.tagline}</p>
              <p className="section-desc principles__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="principles__banner">
        <div className="principles__banner-mark" aria-hidden="true">
          <span className="principles__banner-line principles__banner-line--left"></span>
          <img src={targetIcon} alt="" className="principles__banner-icon" />
          <span className="principles__banner-line principles__banner-line--right"></span>
        </div>

        <h3 className="section-title principles__banner-title">
          Business Confidence
        </h3>
        <p className="section-eyebrow principles__eyebrow">EARNED EVERY DAY</p>
        <p className="section-desc principles__banner-desc">
          Every product we build, every promise we keep, and every relationship we nurture{" "}
          <br />
          should strengthen Business Confidence.
        </p>
      </div>
    </section>
  );
}
