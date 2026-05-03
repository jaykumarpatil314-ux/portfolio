import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:jaykumarp042@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contacts = [
    { label: "Email", value: "jaykumarp042@gmail.com", href: "mailto:jaykumarp042@gmail.com", icon: "✉️" },
    { label: "Phone", value: "+91 8999795672", href: "tel:+918999795672", icon: "📱" },
    { label: "LinkedIn", value: "jaykumar-patil", href: "https://www.linkedin.com/in/jaykumar-patil-1a99ba3ab", icon: "💼" },
    { label: "Location", value: "Shirpur, Dhule, India", href: null, icon: "📍" },
  ];

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="section-tag">{'// contact'}</div>

        <h2 className="section-heading">Let's Work Together</h2>
        <p className="contact-sub">
          I'm currently open to internship opportunities and collaborations. 
          Whether you have a project, opportunity, or just want to say hello — my inbox is open.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            {contacts.map((c) => (
              <div className="contact-item" key={c.label}>
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-lbl">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer" className="contact-val link">
                      {c.value}
                    </a>
                  ) : (
                    <div className="contact-val">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-field">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {sent ? "✓ Opening Mail App..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
