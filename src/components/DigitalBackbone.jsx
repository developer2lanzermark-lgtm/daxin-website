import digitalBackboneBg from "../assets/images/digital-backbone-photo.webp";
import daxinMark from "../assets/images/daxin-mark-growth.webp";
import "../styles/DigitalBackbone.css";

export default function DigitalBackbone() {
  return (
    <section className="digital-backbone">
      <div className="digital-backbone__row">
        <div className="digital-backbone__inner">
          <h2 className="section-title digital-backbone__title">
            <span className="digital-backbone__title-mark">
              <img src={daxinMark} alt="" className="digital-backbone__mark" />
              T
            </span>he Digital Backbone
            <br />
            for Growing Businesses
          </h2>

          <p className="section-desc digital-backbone__subtitle">
            Daxin Technologies helps growing businesses
            build a stronger
            <br />
            digital foundation, enabling them to manage their operations
            <br />
            with the teams they already have.
          </p>
        </div>

        <div className="digital-backbone__art">
          <div className="digital-backbone__art-frame">
            <span className="digital-backbone__blob" aria-hidden="true"></span>
            <span className="digital-backbone__dot" aria-hidden="true"></span>
            <img src={digitalBackboneBg} alt="Industries Daxin serves" />
          </div>
        </div>
      </div>
    </section>
  );
}
