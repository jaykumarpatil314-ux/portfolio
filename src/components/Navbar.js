import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="brand-dot">JK</span>
        <span className="brand-name">Jaykumar</span>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <button onClick={() => scrollTo(link)}>{link}</button>
          </li>
        ))}
        <li>
          <a
            href="mailto:jaykumarp042@gmail.com"
            className="nav-cta"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
