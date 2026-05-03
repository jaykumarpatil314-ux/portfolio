import "./Skills.css";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: "⌨️",
      skills: [
        { name: "Core Java", level: 80 },
        { name: "Python", level: 78 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 },
        { name: "SQL", level: 72 },
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 68 },
        { name: "XML", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Android Studio", level: 80 },
        { name: "Git & GitHub", level: 75 },
        { name: "Visual Studio Code", level: 85 },
      ],
    },
    {
      title: "CS Fundamentals",
      icon: "📐",
      skills: [
        { name: "Data Structures", level: 78 },
        { name: "Operating Systems", level: 75 },
        { name: "DBMS", level: 75 },
        { name: "Computer Networks", level: 70 },
      ],
    },
  ];

  return (
    <section className="skills section-pad" id="skills">
      <div className="container">
        <div className="section-tag">{'// skills'}</div>

        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          What I Work With
        </h2>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-cat" key={cat.title}>
              <div className="cat-header">
                <span className="cat-icon">{cat.icon}</span>
                <h3 className="cat-title">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((s) => (
                  <div className="skill-row" key={s.name}>
                    <div className="skill-label">
                      <span>{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ "--w": `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}