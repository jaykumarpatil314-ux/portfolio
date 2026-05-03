import "./Footer.css";

export default function Footer() {
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="fb-logo">JKP</div>
            <p className="fb-desc">
              Jaykumar Bhatu Patil — Computer Engineering student building 
              things with AI, Android & the web.
            </p>
          </div>

          <div className="footer-nav">
            <div className="fn-title">Navigation</div>
            {links.map((l) => (
              <button
                key={l}
                onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="fn-link"
              >
                {l}
              </button>
            ))}
          </div>

          <div className="footer-contact">
            <div className="fn-title">Contact</div>
            <a href="mailto:jaykumarp042@gmail.com" className="fn-link">jaykumarp042@gmail.com</a>
            <a href="tel:+918999795672" className="fn-link">+91 8999795672</a>
            <a href="https://www.linkedin.com/in/jaykumar-patil-1a99ba3ab"
              target="_blank" rel="noreferrer" className="fn-link">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="fb-copy">
            © {new Date().getFullYear()} Jaykumar Bhatu Patil. All rights reserved.
          </div>
          <div className="fb-made">
            Built with <span style={{ color: "#64dcb4" }}>React</span> · Deployed on <span style={{ color: "#3b82f6" }}>Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
