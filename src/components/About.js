import "./About.css";

export default function About() {
  const stats = [
    { value: "8.25", label: "CGPA (B.Tech)" },
    { value: "90.6%", label: "Diploma Score" },
    { value: "2+", label: "Projects Built" },
    { value: "5+", label: "Languages Known" },
  ];

  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="section-tag">{'// about me'}</div>

        <div className="about-grid">
          <div className="about-visual">
            <div className="av-card">
              <div className="av-avatar">
                <span>JKP</span>
              </div>
              <div className="av-status">
                <span className="status-dot" />
                Open to internships
              </div>
              <div className="av-location">📍 Shirpur, Dhule, India</div>
            </div>
            <div className="av-stats">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-heading">Who I Am</h2>
            <p>
              I'm <strong>Jaykumar Bhatu Patil</strong>, a passionate second-year B.Tech Computer Engineering student at
              R. C. Patel Institute of Technology, Shirpur. I bring a strong diploma background and exceptional
              academic record to everything I do.
            </p>
            <p>
              I'm currently exploring the exciting intersection of <strong>Artificial Intelligence</strong>, 
              <strong> Android Development</strong>, and <strong>Machine Learning</strong>. I believe in learning by building, 
              and I'm always looking for opportunities to grow, contribute, and tackle real problems.
            </p>
            <p>
              When I'm not coding, I'm deepening my understanding of data structures, computer networks, 
              and system design — building the foundation for a career in software engineering.
            </p>
            <div className="about-cta">
              <a href="mailto:jaykumarp042@gmail.com" className="inline-link">
                jaykumarp042@gmail.com →
              </a>
              <a href="tel:+918999795672" className="inline-link">
                +91 8999795672 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
