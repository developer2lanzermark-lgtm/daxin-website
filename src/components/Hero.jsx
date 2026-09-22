import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          We make everyday business
          <br />
          simpler with better software.
        </h1>

        <p className="hero__subtitle">
          Our powerful software products simplify the way you work. Designed
          for growing businesses, built on real-world experience since 1998.
        </p>
      </div>
    </section>
  );
}
