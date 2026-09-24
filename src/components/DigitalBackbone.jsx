import digitalBackboneBg from "../assets/images/story-header-gpro.webp";
import daxinMark from "../assets/images/daxin-mark-outline.png";
import "../styles/DigitalBackbone.css";

export default function DigitalBackbone() {
  return (
    <section className="digital-backbone">
      <div className="digital-backbone__row">
        <div className="digital-backbone__inner">
          <h2 className="section-title digital-backbone__title">
            The <span className="digital-backbone__title-mark">
              <img src={daxinMark} alt="" className="digital-backbone__mark" />
              D
            </span>igital Backbone
            <br />
            for Growing Businesses
          </h2>

          <p className="section-desc digital-backbone__subtitle">
            Daxin Technologies helps growing businesses
            <br />
            build a stronger digital foundation,
            enabling them to manage their operations
            <br />
            with the teams they already have.
          </p>
        </div>

        <div className="digital-backbone__art">
          <img src={digitalBackboneBg} alt="Industries Daxin serves" />
        </div>
      </div>
    </section>
  );
}
