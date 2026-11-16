import React, { useEffect, useState } from "react";
import {
  Atom,
  Code2,
  Database,
  Smartphone,
  Cloud,
  BrainCircuit,
  GitBranch,
  Layers3,
  Server,
  Globe,
  Terminal,
  Cpu,
  Rocket,
  Boxes,
  Zap,
  Monitor,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import "./Technologies.css";

/* =====================================
   TECHNOLOGY DATA
===================================== */

const technologies = [
  { name: "React", short: "⚛", category: "Frontend", color: "#61DAFB" },
  { name: "JavaScript", short: "JS", category: "Frontend", color: "#E8C900" },
  { name: "TypeScript", short: "TS", category: "Frontend", color: "#3178C6" },
  { name: "HTML5", short: "5", category: "Frontend", color: "#E34F26" },
  { name: "CSS3", short: "3", category: "Frontend", color: "#1572B6" },
  { name: "Tailwind", short: "≈", category: "Frontend", color: "#06B6D4" },
  { name: "Bootstrap", short: "B", category: "Frontend", color: "#7952B3" },
  { name: "Next.js", short: "NX", category: "Frontend", color: "#171717" },
  { name: "Vite", short: "ϟ", category: "Frontend", color: "#646CFF" },
  { name: "Python", short: "Py", category: "Backend", color: "#3776AB" },
  { name: "Django", short: "Dj", category: "Backend", color: "#092E20" },
  { name: "Flask", short: "Fl", category: "Backend", color: "#333333" },
  { name: "FastAPI", short: "FA", category: "Backend", color: "#009688" },
  { name: "Node.js", short: "JS", category: "Backend", color: "#68A063" },
  { name: "Express.js", short: "Ex", category: "Backend", color: "#444444" },
  { name: "MySQL", short: "My", category: "Database", color: "#4479A1" },
  { name: "PostgreSQL", short: "Pg", category: "Database", color: "#4169E1" },
  { name: "MongoDB", short: "Mg", category: "Database", color: "#47A248" },
  { name: "Firebase", short: "Fb", category: "Database", color: "#FFCA28" },
  { name: "Supabase", short: "Sb", category: "Database", color: "#3ECF8E" },
  { name: "React Native", short: "RN", category: "Mobile", color: "#61DAFB" },
  { name: "Flutter", short: "Fl", category: "Mobile", color: "#02569B" },
  { name: "Expo", short: "Ex", category: "Mobile", color: "#333333" },
  { name: "AWS", short: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Azure", short: "Az", category: "Cloud", color: "#0078D4" },
  { name: "Google Cloud", short: "GC", category: "Cloud", color: "#4285F4" },
  { name: "Vercel", short: "V", category: "Cloud", color: "#222222" },
  { name: "Netlify", short: "N", category: "Cloud", color: "#00C7B7" },
  { name: "Git", short: "Git", category: "DevOps", color: "#F05032" },
  { name: "GitHub", short: "GH", category: "DevOps", color: "#24292F" },
  { name: "Docker", short: "D", category: "DevOps", color: "#2496ED" },
  { name: "CI/CD", short: "CI", category: "DevOps", color: "#8B5CF6" },
  { name: "Pandas", short: "Pd", category: "AI / ML", color: "#150458" },
  { name: "NumPy", short: "Np", category: "AI / ML", color: "#4DABCF" },
  { name: "Scikit-learn", short: "Sk", category: "AI / ML", color: "#F7931E" },
  { name: "TensorFlow", short: "Tf", category: "AI / ML", color: "#FF6F00" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Mobile",
  "Cloud",
  "DevOps",
  "AI / ML",
];

const floatingPlatforms = [
  {
    name: "React",
    subtitle: "Frontend",
    short: "⚛",
    color: "#61DAFB",
    className: "platform-react",
  },
  {
    name: "AWS",
    subtitle: "Cloud",
    short: "aws",
    color: "#FF9900",
    className: "platform-aws",
  },
  {
    name: "JavaScript",
    subtitle: "Language",
    short: "JS",
    color: "#E8C900",
    className: "platform-js",
  },
  {
    name: "TypeScript",
    subtitle: "Language",
    short: "TS",
    color: "#3178C6",
    className: "platform-ts",
  },
  {
    name: "Flutter",
    subtitle: "Mobile",
    short: "F",
    color: "#02569B",
    className: "platform-flutter",
  },
  {
    name: "Node.js",
    subtitle: "Backend",
    short: "JS",
    color: "#68A063",
    className: "platform-node",
  },
  {
    name: "Python",
    subtitle: "Backend",
    short: "Py",
    color: "#3776AB",
    className: "platform-python",
  },
  {
    name: "PostgreSQL",
    subtitle: "Database",
    short: "Pg",
    color: "#4169E1",
    className: "platform-postgres",
  },
];

/* =====================================
   CATEGORY ICONS
===================================== */

const categoryIcons = {
  Frontend: Atom,
  Backend: Code2,
  Database,
  Mobile: Smartphone,
  Cloud,
  DevOps: GitBranch,
  "AI / ML": BrainCircuit,
};

/* =====================================
   MAIN COMPONENT
===================================== */

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const elements = document.querySelectorAll(".tech-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tech-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-section" id="technologies">
      <div className="tech-container">
        {/* HEADING */}
        <div className="tech-heading tech-animate">
          <div className="tech-heading-badge">
            <Layers3 size={16} />
            OUR TECHNOLOGY STACK
          </div>
          <h2>
            Technologies We Use to
            <br />
            <span>Build Better Solutions</span>
          </h2>
          <p>
            Modern and reliable technologies to create scalable,
            <br className="tech-desktop-only" />
            secure and high-performance products.
          </p>
        </div>

        {/* =================================
            DESKTOP 3D SHOWCASE
        ================================= */}
        <div className="tech-showcase">
          <div className="tech-orbit tech-orbit-one"></div>
          <div className="tech-orbit tech-orbit-two"></div>
          <div className="tech-showcase-glow"></div>

          {/* Floating decorative cubes */}
          <div className="tech-cube tech-cube-one"></div>
          <div className="tech-cube tech-cube-two"></div>
          <div className="tech-cube tech-cube-three"></div>
          <div className="tech-cube tech-cube-four"></div>

          {/* Floating technology platforms */}
          {floatingPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`tech-floating-platform ${platform.className}`}
              style={{
                "--platform-color": platform.color,
                "--float-delay": `${index * 0.35}s`,
              }}
            >
              <div className="tech-floating-face">
                <div className="tech-floating-logo">{platform.short}</div>
                <h3>{platform.name}</h3>
                <p>{platform.subtitle}</p>
              </div>
              <div className="tech-floating-side"></div>
            </div>
          ))}

          {/* Central TECHNEYSOFT platform */}
          <div className="tech-main-platform">
            <div className="tech-main-platform-top">
              <div className="tech-main-icon">
                <Code2 size={48} />
              </div>
              <span>TECHNEYSOFT</span>
              <h3>TECHNOLOGY</h3>
              <p>INNOVATION • DEVELOPMENT</p>
            </div>
            <div className="tech-main-platform-side"></div>
            <div className="tech-main-platform-bottom"></div>
          </div>
        </div>

        {/* =================================
            CATEGORY FILTER
        ================================= */}
        <div className="tech-filter tech-animate">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || Layers3;
            return (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "tech-filter-btn active"
                    : "tech-filter-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category === "All" ? <Boxes size={15} /> : <Icon size={15} />}
                {category === "All" ? "All Technologies" : category}
              </button>
            );
          })}
        </div>

        {/* =================================
            TECHNOLOGY GRID
        ================================= */}
        <div className="tech-grid-wrapper tech-animate">
          <div className="tech-grid">
            {filteredTechnologies.map((technology, index) => (
              <div
                className="tech-item"
                key={technology.name}
                style={{
                  "--item-color": technology.color,
                  "--item-delay": `${(index % 10) * 0.04}s`,
                }}
              >
                <div className="tech-item-logo">{technology.short}</div>
                <h4>{technology.name}</h4>
              </div>
            ))}
          </div>
          {filteredTechnologies.length === 0 && (
            <p className="tech-empty">No technologies found.</p>
          )}
        </div>

        {/* =================================
            STATS
        ================================= */}
        <div className="tech-stats tech-animate">
          <div className="tech-stat">
            <Layers3 />
            <div>
              <strong>7+</strong>
              <p>Technology Categories</p>
            </div>
          </div>
          <div className="tech-stat">
            <Code2 />
            <div>
              <strong>35+</strong>
              <p>Technologies</p>
            </div>
          </div>
          <div className="tech-stat">
            <Rocket />
            <div>
              <strong>360°</strong>
              <p>Digital Capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
