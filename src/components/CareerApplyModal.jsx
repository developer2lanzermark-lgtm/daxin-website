import { useState } from "react";
import "../styles/CareerApplyModal.css";

export default function CareerApplyModal({ isOpen, onClose, roleTitle = "General Application" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: roleTitle,
    experience: "Entry / Fresher",
    portfolio: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="career-modal-overlay" onClick={onClose}>
      <div
        className="career-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-modal-title"
      >
        <button
          className="career-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {submitted ? (
          <div className="career-modal-success">
            <div className="career-modal-success-icon">✓</div>
            <h3 className="career-modal-title">Application Submitted!</h3>
            <p className="career-modal-desc">
              Thank you for applying for <strong>{formData.role || roleTitle}</strong>. Our engineering team at Daxin will review your application and get back to you soon.
            </p>
            <button className="career-modal-submit-btn" onClick={handleReset}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="career-modal-header">
              <span className="career-modal-tag">JOIN DAXIN</span>
              <h3 id="career-modal-title" className="career-modal-title">
                Apply for {roleTitle}
              </h3>
              <p className="career-modal-subtitle">
                Build high-impact software like gPro, Demander & Voice Bill.
              </p>
            </div>

            <form className="career-modal-form" onSubmit={handleSubmit}>
              <div className="career-form-group">
                <label htmlFor="applicant-name">Full Name *</label>
                <input
                  id="applicant-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="career-form-row">
                <div className="career-form-group">
                  <label htmlFor="applicant-email">Email Address *</label>
                  <input
                    id="applicant-email"
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="career-form-group">
                  <label htmlFor="applicant-phone">Phone Number *</label>
                  <input
                    id="applicant-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="career-form-row">
                <div className="career-form-group">
                  <label htmlFor="applicant-role">Applying For</label>
                  <input
                    id="applicant-role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div className="career-form-group">
                  <label htmlFor="applicant-exp">Experience Level</label>
                  <select
                    id="applicant-exp"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="Student / Intern">Student / Intern</option>
                    <option value="Entry / Fresher">Entry / Fresher (0-1 yr)</option>
                    <option value="Mid-Level">Mid-Level (1-3 yrs)</option>
                    <option value="Senior">Senior (3+ yrs)</option>
                  </select>
                </div>
              </div>

              <div className="career-form-group">
                <label htmlFor="applicant-portfolio">GitHub / LinkedIn / Portfolio URL</label>
                <input
                  id="applicant-portfolio"
                  type="url"
                  placeholder="https://github.com/yourusername"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>

              <div className="career-form-group">
                <label htmlFor="applicant-notes">Brief Introduction / Message</label>
                <textarea
                  id="applicant-notes"
                  rows="3"
                  placeholder="Tell us briefly why you want to build products at Daxin..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="career-modal-actions">
                <button type="button" className="career-modal-cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="career-modal-submit-btn">
                  Submit Application →
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
