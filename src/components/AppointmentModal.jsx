import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAppointmentModal } from "../context/AppointmentContext";
import { APPOINTMENT_SHEET_WEBHOOK_URL } from "../config/appointmentSheet";
import daxinLogo from "../assets/images/daxin-logo.png";
import "../styles/AppointmentModal.css";

// General business appointment reasons — intentionally not tied to any one product's features.
const PURPOSE_OPTIONS = [
  "Business Consultation",
  "Product Walkthrough",
  "Partnership & Collaboration",
  "Support & Service Enquiry",
  "General Enquiry",
  "Others",
];

const TIME_SLOTS = [
  "09:30 AM - 11:30 AM",
  "11:30 AM - 01:30 PM",
  "02:30 PM - 04:30 PM",
  "04:30 PM - 06:30 PM",
];

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+971", country: "UAE" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+65", country: "Singapore" },
  { code: "+61", country: "Australia" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+93", country: "Afghanistan" },
  { code: "+355", country: "Albania" },
  { code: "+213", country: "Algeria" },
  { code: "+376", country: "Andorra" },
  { code: "+244", country: "Angola" },
  { code: "+54", country: "Argentina" },
  { code: "+374", country: "Armenia" },
  { code: "+43", country: "Austria" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+973", country: "Bahrain" },
  { code: "+880", country: "Bangladesh" },
  { code: "+375", country: "Belarus" },
  { code: "+32", country: "Belgium" },
  { code: "+501", country: "Belize" },
  { code: "+229", country: "Benin" },
  { code: "+975", country: "Bhutan" },
  { code: "+591", country: "Bolivia" },
  { code: "+387", country: "Bosnia & Herzegovina" },
  { code: "+267", country: "Botswana" },
  { code: "+55", country: "Brazil" },
  { code: "+673", country: "Brunei" },
  { code: "+359", country: "Bulgaria" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+257", country: "Burundi" },
  { code: "+855", country: "Cambodia" },
  { code: "+237", country: "Cameroon" },
  { code: "+238", country: "Cabo Verde" },
  { code: "+236", country: "Central African Republic" },
  { code: "+235", country: "Chad" },
  { code: "+56", country: "Chile" },
  { code: "+86", country: "China" },
  { code: "+57", country: "Colombia" },
  { code: "+269", country: "Comoros" },
  { code: "+242", country: "Congo" },
  { code: "+506", country: "Costa Rica" },
  { code: "+385", country: "Croatia" },
  { code: "+53", country: "Cuba" },
  { code: "+357", country: "Cyprus" },
  { code: "+420", country: "Czech Republic" },
  { code: "+45", country: "Denmark" },
  { code: "+253", country: "Djibouti" },
  { code: "+593", country: "Ecuador" },
  { code: "+20", country: "Egypt" },
  { code: "+503", country: "El Salvador" },
  { code: "+291", country: "Eritrea" },
  { code: "+372", country: "Estonia" },
  { code: "+251", country: "Ethiopia" },
  { code: "+679", country: "Fiji" },
  { code: "+358", country: "Finland" },
  { code: "+33", country: "France" },
  { code: "+241", country: "Gabon" },
  { code: "+220", country: "Gambia" },
  { code: "+995", country: "Georgia" },
  { code: "+49", country: "Germany" },
  { code: "+233", country: "Ghana" },
  { code: "+30", country: "Greece" },
  { code: "+502", country: "Guatemala" },
  { code: "+224", country: "Guinea" },
  { code: "+592", country: "Guyana" },
  { code: "+509", country: "Haiti" },
  { code: "+504", country: "Honduras" },
  { code: "+852", country: "Hong Kong" },
  { code: "+36", country: "Hungary" },
  { code: "+354", country: "Iceland" },
  { code: "+62", country: "Indonesia" },
  { code: "+98", country: "Iran" },
  { code: "+964", country: "Iraq" },
  { code: "+353", country: "Ireland" },
  { code: "+972", country: "Israel" },
  { code: "+39", country: "Italy" },
  { code: "+225", country: "Ivory Coast" },
  { code: "+81", country: "Japan" },
  { code: "+962", country: "Jordan" },
  { code: "+7", country: "Kazakhstan" },
  { code: "+254", country: "Kenya" },
  { code: "+965", country: "Kuwait" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+856", country: "Laos" },
  { code: "+371", country: "Latvia" },
  { code: "+961", country: "Lebanon" },
  { code: "+266", country: "Lesotho" },
  { code: "+231", country: "Liberia" },
  { code: "+218", country: "Libya" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+370", country: "Lithuania" },
  { code: "+352", country: "Luxembourg" },
  { code: "+853", country: "Macau" },
  { code: "+261", country: "Madagascar" },
  { code: "+265", country: "Malawi" },
  { code: "+60", country: "Malaysia" },
  { code: "+960", country: "Maldives" },
  { code: "+223", country: "Mali" },
  { code: "+356", country: "Malta" },
  { code: "+222", country: "Mauritania" },
  { code: "+230", country: "Mauritius" },
  { code: "+52", country: "Mexico" },
  { code: "+373", country: "Moldova" },
  { code: "+377", country: "Monaco" },
  { code: "+976", country: "Mongolia" },
  { code: "+382", country: "Montenegro" },
  { code: "+212", country: "Morocco" },
  { code: "+258", country: "Mozambique" },
  { code: "+95", country: "Myanmar" },
  { code: "+264", country: "Namibia" },
  { code: "+977", country: "Nepal" },
  { code: "+31", country: "Netherlands" },
  { code: "+64", country: "New Zealand" },
  { code: "+505", country: "Nicaragua" },
  { code: "+227", country: "Niger" },
  { code: "+234", country: "Nigeria" },
  { code: "+850", country: "North Korea" },
  { code: "+389", country: "North Macedonia" },
  { code: "+47", country: "Norway" },
  { code: "+968", country: "Oman" },
  { code: "+92", country: "Pakistan" },
  { code: "+970", country: "Palestine" },
  { code: "+507", country: "Panama" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" },
  { code: "+63", country: "Philippines" },
  { code: "+48", country: "Poland" },
  { code: "+351", country: "Portugal" },
  { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia" },
  { code: "+250", country: "Rwanda" },
  { code: "+685", country: "Samoa" },
  { code: "+378", country: "San Marino" },
  { code: "+221", country: "Senegal" },
  { code: "+381", country: "Serbia" },
  { code: "+248", country: "Seychelles" },
  { code: "+232", country: "Sierra Leone" },
  { code: "+421", country: "Slovakia" },
  { code: "+386", country: "Slovenia" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+252", country: "Somalia" },
  { code: "+27", country: "South Africa" },
  { code: "+82", country: "South Korea" },
  { code: "+211", country: "South Sudan" },
  { code: "+34", country: "Spain" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+249", country: "Sudan" },
  { code: "+597", country: "Suriname" },
  { code: "+268", country: "Eswatini" },
  { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" },
  { code: "+963", country: "Syria" },
  { code: "+886", country: "Taiwan" },
  { code: "+992", country: "Tajikistan" },
  { code: "+255", country: "Tanzania" },
  { code: "+66", country: "Thailand" },
  { code: "+228", country: "Togo" },
  { code: "+676", country: "Tonga" },
  { code: "+216", country: "Tunisia" },
  { code: "+90", country: "Turkey" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+256", country: "Uganda" },
  { code: "+380", country: "Ukraine" },
  { code: "+598", country: "Uruguay" },
  { code: "+998", country: "Uzbekistan" },
  { code: "+678", country: "Vanuatu" },
  { code: "+58", country: "Venezuela" },
  { code: "+84", country: "Vietnam" },
  { code: "+967", country: "Yemen" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
];

const getTodayStr = () => new Date().toISOString().split("T")[0];

const getEmptyForm = () => ({
  name: "",
  countryCode: "+91",
  mobile: "",
  email: "",
  city: "",
  state: "",
  country: "India",
  purpose: [],
  date: getTodayStr(),
  schedule: "",
});

export default function AppointmentModal() {
  const { isOpen, closeModal } = useAppointmentModal();
  const [formData, setFormData] = useState(getEmptyForm);
  const [errors, setErrors] = useState({});
  const [purposeOpen, setPurposeOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [menuPos, setMenuPos] = useState(null);
  const purposeRef = useRef(null);
  const purposeMenuRef = useRef(null);
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const handleDoneRef = useRef(() => {});

  const todayStr = getTodayStr();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Autofocus the first field whenever the modal opens (or reopens after "Done").
  useEffect(() => {
    if (!isOpen || submitted) return undefined;
    const t = setTimeout(() => nameInputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [isOpen, submitted]);

  // Enter moves to the next field instead of submitting the form early.
  const handleFormKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const target = e.target;
    if (target.tagName === "TEXTAREA" || target.type === "submit") return;
    e.preventDefault();
    const focusable = Array.from(
      formRef.current.querySelectorAll('input, select, button, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled && el.offsetParent !== null);
    const idx = focusable.indexOf(target);
    if (idx > -1 && idx < focusable.length - 1) {
      focusable[idx + 1].focus();
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  // On the success screen, Enter triggers "Done" the same as clicking it.
  useEffect(() => {
    if (!isOpen || !submitted) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleDoneRef.current();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, submitted]);

  useEffect(() => {
    const onClickOutside = (e) => {
      const insideTrigger = purposeRef.current && purposeRef.current.contains(e.target);
      const insideMenu = purposeMenuRef.current && purposeMenuRef.current.contains(e.target);
      if (!insideTrigger && !insideMenu) {
        setPurposeOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // The purpose menu is portalled to <body> and positioned with `fixed`
  // coordinates so it floats over the modal instead of growing its layout
  // (which used to force the whole modal to scroll to show all options).
  useLayoutEffect(() => {
    if (!purposeOpen) return undefined;
    const updatePosition = () => {
      if (!purposeRef.current) return;
      const rect = purposeRef.current.querySelector(".appt-multiselect").getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 6, left: rect.left, width: rect.width });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [purposeOpen]);

  if (!isOpen) return null;

  const setField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  // Digits only — no letters, spaces, or symbols.
  const setMobile = (value) => setField("mobile", value.replace(/[^0-9]/g, "").slice(0, 15));

  const togglePurpose = (option) => {
    setFormData((prev) => ({
      ...prev,
      purpose: prev.purpose.includes(option)
        ? prev.purpose.filter((item) => item !== option)
        : [...prev.purpose, option],
    }));
    if (errors.purpose) setErrors((prev) => ({ ...prev, purpose: null }));
  };

  const removePurposeChip = (option, e) => {
    e.stopPropagation();
    setFormData((prev) => ({ ...prev, purpose: prev.purpose.filter((item) => item !== option) }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Full name is required.";
    if (!formData.mobile.trim()) next.mobile = "Mobile number is required.";
    else if (!/^[0-9]{6,15}$/.test(formData.mobile.trim())) next.mobile = "Enter a valid mobile number.";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!formData.city.trim()) next.city = "City is required.";
    if (!formData.state.trim()) next.state = "State / Province / Region is required.";
    if (formData.purpose.length === 0) next.purpose = "Select at least one purpose.";
    if (!formData.date) next.date = "Appointment date is required.";
    if (!formData.schedule) next.schedule = "Please choose a time slot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (APPOINTMENT_SHEET_WEBHOOK_URL) {
      setSubmitting(true);
      try {
        // Sent as text/plain (not application/json) so the browser treats this
        // as a "simple request" and skips the CORS preflight — Apps Script web
        // apps don't reliably answer OPTIONS preflight requests. The response
        // is opaque under no-cors, so we can't confirm the row was written;
        // this only tells us the request left the browser without a network error.
        await fetch(APPOINTMENT_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Could not reach the appointment sheet webhook:", err);
      } finally {
        setSubmitting(false);
      }
    } else {
      console.warn(
        "APPOINTMENT_SHEET_WEBHOOK_URL is not set in src/config/appointmentSheet.js — " +
          "this submission was not saved to the spreadsheet."
      );
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    setSubmitted(false);
    setSubmitting(false);
    setFormData(getEmptyForm());
    setErrors({});
  };

  // "Done" on the success screen closes the modal and takes the visitor back
  // to the top of the home page, instead of leaving them wherever they were.
  const handleDone = () => {
    handleClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  handleDoneRef.current = handleDone;

  return (
    <div className="appt-overlay" role="dialog" aria-modal="true" onClick={handleClose}>
      <div className="appt-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="appt-close" aria-label="Close" onClick={handleClose}>
          &times;
        </button>

        {submitted ? (
          <div className="appt-success">
            <div className="appt-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="section-title appt-success-title">Appointment Requested</h2>
            <p className="section-desc appt-success-desc">
              Thank you, {formData.name}. We've received your request and will confirm your appointment shortly.
            </p>
            <div className="appt-summary">
              <div className="appt-summary-row">
                <span>Date &amp; Time</span>
                <strong>{formData.date} · {formData.schedule}</strong>
              </div>
              <div className="appt-summary-row">
                <span>Mobile</span>
                <strong>{formData.countryCode} {formData.mobile}</strong>
              </div>
              {formData.email && (
                <div className="appt-summary-row">
                  <span>Email</span>
                  <strong>{formData.email}</strong>
                </div>
              )}
              <div className="appt-summary-row">
                <span>Location</span>
                <strong>{formData.city}, {formData.state}, {formData.country}</strong>
              </div>
              <div className="appt-summary-row">
                <span>Purpose</span>
                <strong>{formData.purpose.join(", ")}</strong>
              </div>
            </div>
            <button type="button" className="btn-text appt-submit" onClick={handleDone}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="appt-header">
              <img src={daxinLogo} alt="Daxin Technologies" className="appt-logo" />
              <h2 className="section-title appt-title">Book an Appointment</h2>
              <p className="section-desc appt-subtitle">
                Share a few details and pick a time that works for you.
              </p>
            </div>

            <form className="appt-form" noValidate ref={formRef} onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
              <div className="appt-field">
                <label className="appt-label">Name *</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  className={`appt-input${errors.name ? " appt-input--error" : ""}`}
                  maxLength={60}
                  value={formData.name}
                  onChange={(e) => setField("name", e.target.value)}
                />
                {errors.name && <span className="appt-error">{errors.name}</span>}
              </div>

              <div className="appt-field">
                <label className="appt-label">Mobile Number *</label>
                <div className="appt-phone-row">
                  <select
                    className="appt-input appt-country-code"
                    value={formData.countryCode}
                    onChange={(e) => setField("countryCode", e.target.value)}
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map(({ code, country }) => (
                      <option key={code} value={code}>{country} ({code})</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    className={`appt-input${errors.mobile ? " appt-input--error" : ""}`}
                    maxLength={25}
                    value={formData.mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                {errors.mobile && <span className="appt-error">{errors.mobile}</span>}
              </div>

              <div className="appt-field">
                <label className="appt-label">Email Address</label>
                <input
                  type="email"
                  className={`appt-input${errors.email ? " appt-input--error" : ""}`}
                  maxLength={80}
                  value={formData.email}
                  onChange={(e) => setField("email", e.target.value)}
                />
                {errors.email && <span className="appt-error">{errors.email}</span>}
              </div>

              <div className="appt-grid">
                <div className="appt-field">
                  <label className="appt-label">City *</label>
                  <input
                    type="text"
                    className={`appt-input${errors.city ? " appt-input--error" : ""}`}
                    maxLength={50}
                    value={formData.city}
                    onChange={(e) => setField("city", e.target.value)}
                  />
                  {errors.city && <span className="appt-error">{errors.city}</span>}
                </div>

                <div className="appt-field">
                  <label className="appt-label">State / Province / Region *</label>
                  <input
                    type="text"
                    className={`appt-input${errors.state ? " appt-input--error" : ""}`}
                    maxLength={50}
                    value={formData.state}
                    onChange={(e) => setField("state", e.target.value)}
                  />
                  {errors.state && <span className="appt-error">{errors.state}</span>}
                </div>
              </div>

              <div className="appt-field" ref={purposeRef}>
                <label className="appt-label">Purpose of Appointment *</label>
                <div
                  className={`appt-multiselect${errors.purpose ? " appt-input--error" : ""}${purposeOpen ? " appt-multiselect--open" : ""}`}
                  tabIndex={0}
                  onClick={() => setPurposeOpen((prev) => !prev)}
                >
                  <div className="appt-chips">
                    {formData.purpose.length === 0 ? (
                      <span className="appt-placeholder">Select one or more...</span>
                    ) : (
                      formData.purpose.map((item) => (
                        <span key={item} className="appt-chip">
                          {item}
                          <button type="button" onClick={(e) => removePurposeChip(item, e)} aria-label={`Remove ${item}`}>
                            &times;
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                  <span className="appt-multiselect-arrow">{purposeOpen ? "▲" : "▼"}</span>
                </div>
                {purposeOpen && menuPos &&
                  createPortal(
                    <div
                      className="appt-menu appt-menu--portal"
                      ref={purposeMenuRef}
                      style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}
                    >
                      {PURPOSE_OPTIONS.map((option) => (
                        <label key={option} className="appt-menu-item" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={formData.purpose.includes(option)}
                            onChange={() => togglePurpose(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>,
                    document.body
                  )}
                {errors.purpose && <span className="appt-error">{errors.purpose}</span>}
              </div>

              <div className="appt-grid">
                <div className="appt-field">
                  <label className="appt-label">Appointment Date *</label>
                  <input
                    type="date"
                    min={todayStr}
                    className={`appt-input${errors.date ? " appt-input--error" : ""}`}
                    value={formData.date}
                    onChange={(e) => setField("date", e.target.value)}
                  />
                  {errors.date && <span className="appt-error">{errors.date}</span>}
                </div>

                <div className="appt-field">
                  <label className="appt-label">Preferred Time Slot to talk *</label>
                  <select
                    className={`appt-input${errors.schedule ? " appt-input--error" : ""}`}
                    value={formData.schedule}
                    onChange={(e) => setField("schedule", e.target.value)}
                  >
                    <option value="">Select a time slot</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.schedule && <span className="appt-error">{errors.schedule}</span>}
                </div>
              </div>

              <div className="appt-actions">
                <button type="submit" className="btn-text appt-submit" disabled={submitting}>
                  {submitting ? "Submitting…" : "Confirm Appointment"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
