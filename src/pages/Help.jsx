import React, { useState } from 'react';

const Help = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
    // send data to backend here
  };

  return [
    <div
      className="p-4"
      style={{ color: 'white', backgroundColor: 'transparent' }}
    >
      <h2 className="mb-4">Help & Support</h2>

      {/* FAQ Section */}
      <div className="mb-5">
        <h4>Frequently Asked Questions</h4>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-dark text-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How do I reset my password?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Go to Settings &gt; Change Password, enter your current password,
                and choose a new one.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-dark text-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                How can I contact support?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can use the contact form below or email us at support@example.com.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-dark text-white">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-dark text-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                How do I change the theme?
              </button>
            </h2>
            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Go to Settings &gt; Preferences and choose Light or Dark theme.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Form */}
      <div className="mb-5">
        <h4>Contact Support</h4>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control bg-dark text-white"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {/* Helpful Links */}
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/settings" className="text-info">Go to Settings</a>
          </li>
          <li>
            <a href="/dashboard" className="text-info">Visit Dashboard</a>
          </li>
          <li>
            <a href="/contact" className="text-info">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  ]
};

export default Help;
