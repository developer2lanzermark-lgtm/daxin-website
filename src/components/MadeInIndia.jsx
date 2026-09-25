import madeInIndiaBg from "../assets/images/made-in-india-bg.webp";
import {
  CUSTOMERS_COUNT,
  PRODUCTS_COUNT,
  PARTNERS_COUNT,
  yearsOfExperience,
} from "../config/siteStats";
import "../styles/MadeInIndia.css";

const withThousandsSeparator = (value) =>
  String(value).replace(/\d+/, (digits) => Number(digits).toLocaleString("en-US"));

const STATS = [
  { value: withThousandsSeparator(CUSTOMERS_COUNT), label: "Businesses Using Our Software" },
  { value: withThousandsSeparator(PRODUCTS_COUNT), label: "Products & Solutions" },
  { value: `${yearsOfExperience}+`, label: "Years of Experience" },
  { value: withThousandsSeparator(PARTNERS_COUNT), label: "Business Partners" },
];

export default function MadeInIndia() {
  return (
    <section
      className="made-in-india"
      style={{ backgroundImage: `url(${madeInIndiaBg})` }}
      aria-labelledby="made-in-india-title"
    >
      <div className="made-in-india__inner">
        <h2 id="made-in-india-title" className="section-title made-in-india__title">
          Made in India.{" "}
          <br />
          Made for Growing Businesses.
        </h2>

        <span className="made-in-india__rule" aria-hidden="true"></span>

        <ul className="made-in-india__stats">
          {STATS.map((stat) => (
            <li key={stat.label} className="made-in-india__stat">
              <p className="section-desc made-in-india__value">{stat.value}</p>
              <p className="support-line made-in-india__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
