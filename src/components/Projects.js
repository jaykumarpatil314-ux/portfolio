import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Android Architecture Generator",
      emoji: "🤖",
      type: "Android + AI",
      desc: "An Android application that leverages Artificial Intelligence to automate software architecture design based on user requirements. The system analyzes input data and generates optimized architectural patterns, reducing manual effort and improving design efficiency.",
      highlights: [
        "ML-powered architecture recommendations",
        "Automated component & framework selection",
        "Real-time architecture visualization",
        "User-friendly Android interface",
      ],
      tags: ["Android Studio", "Java", "Machine Learning", "AI", "XML"],
      color: "#64dcb4",
    },
    {
      title: "Browser Extension – Password Manager",
      emoji: "🔐",
      type: "Python + Security",
      desc: "A Python-based password manager browser extension designed to provide a secure, efficient, and user-friendly platform for storing and managing multiple passwords. Features a master password system for secure storage with encryption.",
      highlights: [
        "AES encryption for stored credentials",
        "Master password access control",
        "Browser extension integration",
        "Secure local storage management",
      ],
      tags: ["Python", "Browser Extension", "Encryption", "Security"],
      color: "#3b82f6",
    },
  ];

  return (
    <section className="projects section-pad" id="projects">
      <div className="container">
        <div className="section-tag">{'// projects'}</div>

        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Things I've Built
        </h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="proj-card" key={i} style={{ "--accent": p.color }}>
              <div className="proj-top">
                <div className="proj-emoji">{p.emoji}</div>
                <span className="proj-type">{p.type}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <ul className="proj-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <span className="hl-dot">▸</span> {h}
                  </li>
                ))}
              </ul>
              <div className="proj-footer">
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}