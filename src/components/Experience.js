import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Application Development Intern",
      company: "Innovation Hub Nashik",
      period: "June 2024 – July 2024",
      type: "Internship",
      desc: "Worked on application development projects at Innovation Hub Nashik. Gained hands-on experience building and testing real-world applications, collaborating with a team and applying core programming skills in a professional environment.",
      tags: ["Android Studio", "Java", "App Development"],
    },
    {
      role: "Machine Learning Intern",
      company: "Codesoft (Virtual)",
      period: "March 2026 – May 2026",
      type: "Virtual Internship",
      desc: "Completed machine learning projects and earned certification as a virtual intern at Codesoft. Built and evaluated ML models, gaining practical experience in Python-based ML workflows and data-driven problem solving.",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
    },
  ];

  const education = [
    {
      degree: "B.Tech – Computer Engineering",
      institution: "R. C. Patel Institute of Technology, Shirpur",
      period: "Aug 2025 (Current)",
      score: "CGPA: 8.25",
    },
    {
      degree: "Diploma – Computer Engineering",
      institution: "R. C. Patel Polytechnic, Shirpur",
      period: "Completed June 2025",
      score: "90.60%",
    },
    {
      degree: "10th SSC",
      institution: "N. D. Marathe High-School, Shindhkheda",
      period: "May 2022",
      score: "84.80%",
    },
  ];

  return (
    <section className="experience section-pad" id="experience">
      <div className="container">
        <div className="section-tag">{'// experience & education'}</div>

        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          My Journey
        </h2>

        <div className="exp-grid">
          <div className="exp-col">
            <h3 className="col-title">Work Experience</h3>
            <div className="timeline">
              {experiences.map((e, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot" />
                  <div className="tl-card">
                    <div className="tl-header">
                      <div>
                        <div className="tl-role">{e.role}</div>
                        <div className="tl-company">{e.company}</div>
                      </div>
                      <span className="tl-badge">{e.type}</span>
                    </div>
                    <div className="tl-period">{e.period}</div>
                    <p className="tl-desc">{e.desc}</p>
                    <div className="tl-tags">
                      {e.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="exp-col">
            <h3 className="col-title">Education</h3>
            <div className="edu-list">
              {education.map((e, i) => (
                <div className="edu-item" key={i}>
                  <div className="edu-score">{e.score}</div>
                  <div className="edu-info">
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-inst">{e.institution}</div>
                    <div className="edu-period">{e.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}