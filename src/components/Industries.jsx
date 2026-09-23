import industriesBackground from "../assets/images/industries-hero.webp";
import "../styles/Industries.css";

export default function Industries() {
  return (
    <section className="industries">
      <div
        className="industries__bg"
        style={{ backgroundImage: `url(${industriesBackground})` }}
      >
        <div className="industries__inner">
          <h2 className="industries__title">
            <span className="industries__title-line">Software That Does More.</span>
            <br />
            So You Can Too.
          </h2>

          <p className="industries__subtitle">
            With decades of real-world experience, we create software products across diverse
            <br />
            business categories, bringing together technology and practical thinking to solve
            <br />
            meaningful business problems.
          </p>
        </div>
      </div>
    </section>
  );
}
