import { BOOK_APPOINTMENT_URL } from "../config/siteLinks";
import "../styles/GetStarted.css";

export default function GetStarted() {
  return (
    <section className="get-started" aria-labelledby="get-started-title">
      <div className="get-started__inner">
        <h2 id="get-started-title" className="section-title get-started__title">
          Ready to work better?
        </h2>
        <p className="section-subtitle get-started__subtitle">
          Let’s get you started.
        </p>

        <a className="btn-text get-started__cta" href={BOOK_APPOINTMENT_URL}>
          Book an Appointment
        </a>
      </div>
    </section>
  );
}
