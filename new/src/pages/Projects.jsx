import React, { useEffect, useRef } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Globe,
  Sparkles,
} from "lucide-react";
import "./Projects.css";

// =====================================
// PROJECT DATA
// Later update website URLs here
// =====================================

const projects = [
  {
    id: 1,
    name: "HeartBeat Cafe",
    category: "Food & Hospitality",
    description:
      "A modern digital experience for food and hospitality businesses.",
    technologies: ["React", "UI/UX", "Web Development"],
    image: "/projects/heartbeat-cafe.png",
    url: "",
    color: "pink",
    icon: "☕",
  },
  {
    id: 2,
    name: "Millance Gold",
    category: "Precious Metals",
    description:
      "A premium digital platform for gold and jewellery services.",
    technologies: ["React", "FinTech", "Web Development"],
    image: "/projects/millance-gold.png",
    url: "",
    color: "gold",
    icon: "✦",
  },
  {
    id: 3,
    name: "Millance Store",
    category: "E-Commerce",
    description:
      "An elegant online shopping experience for modern customers.",
    technologies: ["React", "E-Commerce", "UI/UX"],
    image: "/projects/millance-store.png",
    url: "",
    color: "blue",
    icon: "🛍",
  },
  {
    id: 4,
    name: "HeartBeatCart",
    category: "Delivery Platform",
    description:
      "A convenient digital platform for food ordering and delivery.",
    technologies: ["React", "Mobile App", "API"],
    image: "/projects/heartbeat-cart.png",
    url: "",
    color: "purple",
    icon: "🛒",
  },
  {
    id: 5,
    name: "FX Universe",
    category: "Trading & Finance",
    description:
      "A modern interface for trading and financial market solutions.",
    technologies: ["React", "FinTech", "Dashboard"],
    image: "/projects/fx-universe.png",
    url: "",
    color: "cyan",
    icon: "📈",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = section.querySelectorAll(".project-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleVisit = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-page" id="projects" ref={sectionRef}>
      {/* BACKGROUND EFFECTS */}
      <div className="projects-grid-bg"></div>
      <div className="projects-glow projects-glow-left"></div>
      <div className="projects-glow projects-glow-right"></div>
      <div className="projects-wave projects-wave-one"></div>
      <div className="projects-wave projects-wave-two"></div>

      <div className="projects-container">
        {/* HEADING */}
        <div className="projects-heading project-reveal">
          <span className="projects-badge">
            <Sparkles size={12} />
            Our Projects
          </span>
          <h1>
            Explore <span>Our Work</span>
          </h1>
          <p>
            A look at some of the digital products we've built.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-${project.color} project-reveal`}
              key={project.id}
              style={{
                "--project-delay": `${index * 120}ms`,
              }}
            >
              {/* PROJECT IMAGE */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.name} website preview`}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback when image is not available */}
                <div className="project-image-fallback">
                  <span>{project.icon}</span>
                  <strong>{project.name}</strong>
                  <small>{project.category}</small>
                </div>
                <span className="project-category">
                  {project.category}
                </span>
                <div className="project-image-overlay"></div>
                <div className="project-image-action">
                  <ExternalLink size={17} />
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="project-info">
                <div className="project-title-row">
                  <div>
                    <span className="project-number">
                      PROJECT 0{project.id}
                    </span>
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project-title-icon">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* VISIT WEBSITE */}
                <button
                  className={`project-visit-btn ${!project.url ? "project-disabled" : ""}`}
                  onClick={() => handleVisit(project.url)}
                  disabled={!project.url}
                  title={
                    project.url
                      ? "Visit Website"
                      : "Website URL will be added later"
                  }
                >
                  <span>
                    Visit Website
                  </span>
                  <ExternalLink size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="projects-bottom project-reveal">
          <Globe size={17} />
          <span>
            Turning innovative ideas into digital experiences.
          </span>
        </div>
      </div>
    </section>
  );
}
