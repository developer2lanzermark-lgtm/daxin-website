import { useEffect, useState } from "react";
import storySlide1 from "../assets/images/story-slide1-bright.webp";
import storySlide2 from "../assets/images/story-slide2-growth.webp";
import storySlide3 from "../assets/images/story-slide3-curious.webp";
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
    title: "We Build for the Long Term.",
    titleLine2: "",
    description:
      "Our products are continuously developed over time, adding new capabilities and adapting to changing business and technology needs.",
    sideImage: { src: storySlide2, alt: "Daxin product growth and innovation" },
  },
  {
    id: "slide-3",
    theme: "dark-navy",
    title: "Curious About What's Next.",
    titleLine2: "",
    description:
      "We keep exploring new technologies and ideas, looking for meaningful ways to bring them into the products we build.",
    sideImage: { src: storySlide3, alt: "Daxin team exploring emerging technology" },
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
                        <h2 className="story-title story-title--inter story-title--gold">
                          {slide.title}
                          <br />
                          {slide.titleLine2}
                        </h2>
                        <p className="story-description story-description--inter story-description--gold">{slide.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Slide 2: Light Beige with Multi-Photo Grid (Matching Zoho Screenshot 3) */}
                  {slide.theme === "light-beige" && (
                    <div
                      className="story-card story-card--light-beige"
                      style={{ backgroundImage: `url(${slide.sideImage.src})` }}
                    >
                      <div className="story-content story-content--solo">
                        <h2 className="story-title story-title--sans">
                          {slide.title}
                        </h2>
                        <p className="story-description story-description--dark">{slide.description}</p>
                      </div>
                    </div>
                  )}

                  {/* Slide 3: Curious About What's Next */}
                  {slide.theme === "dark-navy" && (
                    <div
                      className="story-card story-card--dark-navy"
                      style={{ backgroundImage: `url(${slide.sideImage.src})` }}
                    >
                      <div className="story-content story-content--solo story-content--center">
                        <h2 className="story-title story-title--inter story-title--navy">
                          {slide.title}
                        </h2>
                        <p className="story-description story-description--inter story-description--slate">
                          We keep exploring new technologies and ideas, looking for meaningful ways to
                          <br />
                          bring them into the products we build.
                        </p>
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
