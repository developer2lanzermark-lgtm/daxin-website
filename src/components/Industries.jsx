import industriesBackground from "../assets/images/industries-hero-v2.webp";
import "../styles/Industries.css";

export default function Industries() {
  return (
    <section className="industries">
      <div
        className="industries__bg"
        style={{ backgroundImage: `url(${industriesBackground})` }}
      >
        <div className="industries__inner">
          <h2 className="section-title industries__title">
            <span className="industries__title-line">Software that does more.</span>
            <br />
            <span className="industries__title-underline">So y</span>ou can too.
          </h2>

          <p className="section-desc industries__subtitle">
            With decades of real-world experience,
            <br />
            we create software products across diverse business categories,
            <br />
            bringing together technology and practical thinking
            <br />
            to solve meaningful business problems.
          </p>
        </div>
      </div>
    </section>
  );
}
