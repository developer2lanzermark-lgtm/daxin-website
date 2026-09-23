import { useEffect, useState } from "react";
import storySlide1 from "../assets/images/story-slide1-bright.webp";
import industriesHero from "../assets/images/industries-hero.webp";
import devicesIllustration from "../assets/images/devices-illustration.webp";
import heroBackground from "../assets/images/hero-background.webp";
import "../styles/Story.css";

const AUTOPLAY_MS = 7000;

const SLIDES = [
  {
    id: "slide-1",
    theme: "dark-executive",
    title: "Built with responsibility.",
    titleLine2: "Trusted by businesses across industries.",
    description:
      "Intuitive software. Dedicated support. A relationship you can trust.",
    sideImage: { src: storySlide1, alt: "Daxin leadership vision" },
  },
  {
    id: "slide-2",
    theme: "light-beige",
    title: "Daxin keeps your business",
    titleLine2: "moving forward.",
    description:
      "Empowering enterprises worldwide with intelligent, unified software solutions.",
    ctaLabel: "EXPLORE VIDEO STORIES",
    ctaArrow: "›",
    ctaHref: "/products",
    ctaStyle: "pill-gradient",
    sideImage: { src: industriesHero, alt: "Daxin business software in action" },
  },
  {
    id: "slide-3",
    theme: "dark-navy",
    title: "Your trust is our single",
    titleLine2: "metric of success.",
    description:
      "Every product we build starts with a real problem our customers face every day.",
    ctaLabel: "DISCOVER OUR VISION",
    ctaArrow: "↗",
    ctaHref: "/products",
    ctaStyle: "text-link",
    ctaColor: "#38bdf8",
    bgImage: heroBackground,
    sideImage: devicesIllustration,
  },
];

export default function Story() {
  const [index, setIndex] = useState(0);
  const total = SLIDES.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, total]);

  return (
    <section className="story-section">
      <div className="story-container">
        {/* Navigation Buttons */}
        <button
          type="button"
          className="story-nav story-nav--prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Outer White Card Frame with double outline/border effect */}
        <div className="story-outer-card">
          <div className="story-viewport">
            <div
              className="story-track"
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${index * (100 / total)}%)`,
              }}
            >
              {SLIDES.map((slide) => (
                <div
                  className={`story-slide story-slide--${slide.theme}`}
                  key={slide.id}
                  style={{ width: `${100 / total}%` }}
                >
                  {/* Slide 1: Full-bleed background image, text over its natural dark side */}
                  {slide.theme === "dark-executive" && (
                    <div
                      className="story-card story-card--dark-exec"
                      style={{ backgroundImage: `url(${slide.sideImage.src})` }}
                    >
                      <div className="story-content story-content--solo">
                        <h2 className="story-title story-title--inter">
                          {slide.title}
                          <br />
                          {slide.titleLine2}
                        </h2>
                        <p className="story-description story-description--inter">{slide.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Slide 2: Light Beige with Multi-Photo Grid (Matching Zoho Screenshot 3) */}
                  {slide.theme === "light-beige" && (
                    <div className="story-card story-card--light-beige">
                      <div className="story-content">
                        <h2 className="story-title story-title--sans">
                          {slide.title}
                          <br />
                          {slide.titleLine2}
                        </h2>
                        <p className="story-description story-description--dark">{slide.description}</p>
                        <a href={slide.ctaHref} className="story-cta-pill">
                          <span>{slide.ctaLabel}</span>
                          <span className="story-cta-arrow">{slide.ctaArrow}</span>
                        </a>
                      </div>

                      <div className="story-grid-side">
                        <div className="story-single-image">
                          <img src={slide.sideImage.src} alt={slide.sideImage.alt} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Slide 3: Dark Navy Enterprise Vision */}
                  {slide.theme === "dark-navy" && (
                    <div
                      className="story-card story-card--dark-navy"
                      style={{ backgroundImage: `url(${slide.bgImage})` }}
                    >
                      <div className="story-card-overlay story-card-overlay--navy">
                        <div className="story-content">
                          <h2 className="story-title story-title--serif">
                            {slide.title}
                            <br />
                            {slide.titleLine2}
                          </h2>
                          <p className="story-description">{slide.description}</p>
                          <a href={slide.ctaHref} className="story-cta-link" style={{ color: slide.ctaColor }}>
                            <span>{slide.ctaLabel}</span>
                            <span className="story-cta-arrow">{slide.ctaArrow}</span>
                          </a>
                        </div>

                        <div className="story-side-illustration">
                          <img src={slide.sideImage} alt="Daxin Ecosystem Devices" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="story-nav story-nav--next"
          onClick={goNext}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
