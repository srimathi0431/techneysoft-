import React from "react";
import {
  Users,
  Layers3,
  Headset,
  ArrowRight,
  Sparkles,
  Code2,
} from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page" id="about">
      <div className="about-bg-glow"></div>
      <div className="about-bg-grid"></div>

      <div className="about-container">
        {/* ABOUT HERO */}
        <div className="about-hero">
          {/* LEFT CONTENT */}
          <div className="about-content reveal-left">
            <div className="about-badge">
              <Sparkles size={13} />
              About Techneysoft
            </div>
            <h1>
              We Build <span className="about-blue">Digital</span>
              <br />
              <span className="about-purple">
                Solutions That Move
              </span>
              <br />
              Businesses <span className="about-blue">Forward</span>
            </h1>
            <p className="about-description">
              Techneysoft is an IT solution company focused on
              building modern web solutions, software applications
              and digital products for businesses.
            </p>
            <p className="about-description">
              We combine technology, design and business
              understanding to create scalable digital solutions
              that deliver real value.
            </p>
          </div>

          {/* RIGHT BUILDING VISUAL */}
          <div className="about-visual reveal-right">
            <div className="about-blue-glow"></div>
            <div className="about-purple-glow"></div>
            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>

            <div className="about-building">
              <div className="building-roof">
                <span>TECHNEYSOFT</span>
              </div>
              <div className="building-body">
                <div className="building-glass">
                  {Array.from({ length: 5 }).map((_, row) => (
                    <div className="building-row" key={row}>
                      {Array.from({ length: 7 }).map((_, col) => (
                        <span
                          className="building-glass-window"
                          key={col}
                        ></span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="building-door">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="building-floor"></div>
            </div>

            <div className="about-floating-card floating-code">
              <Code2 size={17} />
              <span>Innovation</span>
            </div>
            <div className="about-floating-card floating-tech">
              <Sparkles size={17} />
              <span>Technology</span>
            </div>
          </div>
        </div>

        {/* STATISTICS */}
        <div className="about-statistics">
          <div className="about-stat-card reveal reveal-delay-1">
            <div className="about-stat-icon purple-stat">
              <Users size={26} />
            </div>
            <div className="about-stat-info">
              <h3>50+</h3>
              <p>Projects & Solutions</p>
            </div>
          </div>

          <div className="about-stat-card reveal reveal-delay-2">
            <div className="about-stat-icon blue-stat">
              <Layers3 size={26} />
            </div>
            <div className="about-stat-info">
              <h3>10+</h3>
              <p>Technology Skills</p>
            </div>
          </div>

          <div className="about-stat-card reveal reveal-delay-3">
            <div className="about-stat-icon purple-stat">
              <Headset size={26} />
            </div>
            <div className="about-stat-info">
              <h3>24/7</h3>
              <p>Digital Support</p>
            </div>
          </div>
        </div>

        {/* LEARN MORE */}
        <div className="about-action reveal">
          <a href="/#services" className="about-learn-btn">
            Learn More
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
