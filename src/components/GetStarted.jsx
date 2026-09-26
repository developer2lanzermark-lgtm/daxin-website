import { useAppointmentModal } from "../context/AppointmentContext";
import "../styles/GetStarted.css";

export default function GetStarted() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="get-started" aria-labelledby="get-started-title">
      <div className="get-started__inner">
        <h2 id="get-started-title" className="section-title get-started__title">
          Ready to work better?
        </h2>
        <p className="section-subtitle get-started__subtitle">
          Let’s get you started.
        </p>

        <button
          type="button"
          className="btn-text get-started__cta"
          onClick={openModal}
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
}
