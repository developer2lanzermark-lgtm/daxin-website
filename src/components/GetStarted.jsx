import { useLocation } from "react-router-dom";
import { useAppointmentModal } from "../context/AppointmentContext";
import "../styles/GetStarted.css";

const CAREERS_APPLICATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfkMpsCaq-wbAbUAGrxzEssv_fmc6FuBTl7npli8mi0seRRgw/viewform";

export default function GetStarted() {
  const { openModal } = useAppointmentModal();
  const { pathname } = useLocation();
  const isCareersPage = pathname === "/careers";

  return (
    <section className="get-started" aria-labelledby="get-started-title">
      <div className="get-started__inner">
        <h2 id="get-started-title" className="section-title get-started__title">
          Ready to work better?
        </h2>
        <p className="section-subtitle get-started__subtitle">
          Let’s get you started.
        </p>

        {isCareersPage ? (
          <a
            href={CAREERS_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text get-started__cta"
          >
            Apply Now
          </a>
        ) : (
          <button
            type="button"
            className="btn-text get-started__cta"
            onClick={openModal}
          >
            Book an Appointment
          </button>
        )}
      </div>
    </section>
  );
}
