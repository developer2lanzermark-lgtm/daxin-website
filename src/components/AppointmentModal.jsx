import { useEffect, useRef, useState } from "react";
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
];

const COUNTRIES = ["India", "United Arab Emirates", "United States", "United Kingdom", "Singapore", "Other"];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry", "Other",
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
  const purposeRef = useRef(null);

  const todayStr = getTodayStr();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (purposeRef.current && !purposeRef.current.contains(e.target)) {
        setPurposeOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

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
    if (!formData.state) next.state = "State is required.";
    if (!formData.country) next.country = "Country is required.";
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

            <form className="appt-form" noValidate onSubmit={handleSubmit}>
              <div className="appt-field">
                <label className="appt-label">Full Name *</label>
                <input
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

              <div className="appt-grid-3">
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
                  <label className="appt-label">State / Region *</label>
                  <select
                    className={`appt-input${errors.state ? " appt-input--error" : ""}`}
                    value={formData.state}
                    onChange={(e) => setField("state", e.target.value)}
                  >
                    <option value="">Select state</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <span className="appt-error">{errors.state}</span>}
                </div>

                <div className="appt-field">
                  <label className="appt-label">Country *</label>
                  <select
                    className={`appt-input${errors.country ? " appt-input--error" : ""}`}
                    value={formData.country}
                    onChange={(e) => setField("country", e.target.value)}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="appt-field" ref={purposeRef}>
                <label className="appt-label">Purpose of Appointment *</label>
                <div
                  className={`appt-multiselect${errors.purpose ? " appt-input--error" : ""}${purposeOpen ? " appt-multiselect--open" : ""}`}
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
                {purposeOpen && (
                  <div className="appt-menu">
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
                  </div>
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
                  <label className="appt-label">Preferred Time Slot *</label>
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
