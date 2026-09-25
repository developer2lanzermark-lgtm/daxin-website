import digitalBackboneBg from "../assets/images/digital-backbone-bg-v2.webp";
import highlightStrokes from "../assets/images/highlight-strokes.png";
import "../styles/DigitalBackbone.css";

export default function DigitalBackbone() {
  return (
    <section
      className="digital-backbone"
      style={{ backgroundImage: `url(${digitalBackboneBg})` }}
    >
      <div className="digital-backbone__row">
        <div className="digital-backbone__inner">
          <h2 className="section-title digital-backbone__title">
            The Digital{" "}
            <span className="digital-backbone__highlight-word">
              Backbone
              <img
                src={highlightStrokes}
                alt=""
                className="digital-backbone__highlight"
                aria-hidden="true"
              />
            </span>
            <br />
            for Growing Businesses
          </h2>

          <div className="digital-backbone__copy">
            <p className="section-desc digital-backbone__subtitle">
              Daxin Technologies helps growing businesses build a stronger{" "}
              <br />
              digital foundation, so they can scale their operations,{" "}
              <br />
              handle more business, and grow with the teams they already have.
            </p>

            <p className="support-line digital-backbone__tagline">
              Do More
              <span className="digital-backbone__dot" aria-hidden="true">·</span>
              Scale Better
              <span className="digital-backbone__dot" aria-hidden="true">·</span>
              Grow With the Team You Have
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
