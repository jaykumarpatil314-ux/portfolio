import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 220, 180, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg-gradient" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Opportunities
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name">Jaykumar</span>
          <span className="hero-name hero-name-alt">Patil</span>
        </h1>

        <p className="hero-tagline">
          <span className="typed-text">B.Tech CS Student</span>
          <span className="separator"> // </span>
          <span className="typed-text">AI & Android Developer</span>
          <span className="separator"> // </span>
          <span className="typed-text">Problem Solver</span>
        </p>

        <p className="hero-desc">
          A second-year Computer Engineering student passionate about building things with AI,
          Android, and the web. Currently exploring machine learning and full-stack development.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View My Work
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get In Touch
          </a>
        </div>

        <div className="hero-social">
          <a href="https://www.linkedin.com/in/jaykumar-patil-1a99ba3ab" target="_blank" rel="noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:jaykumarp042@gmail.com" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
