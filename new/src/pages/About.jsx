import React, { useState, useEffect, useRef } from "react";
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
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    satisfaction: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Count-up animation for statistics
  useEffect(() => {
    const currentStatsRef = statsRef.current;
    if (!currentStatsRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate Projects counter (50)
            let projectCount = 0;
            const projectInterval = setInterval(() => {
              projectCount += 2;
              if (projectCount >= 50) {
                projectCount = 50;
                clearInterval(projectInterval);
              }
              setCounters(prev => ({ ...prev, projects: projectCount }));
            }, 30);

            // Animate Technologies counter (10)
            let techCount = 0;
            const techInterval = setInterval(() => {
              techCount += 1;
              if (techCount >= 10) {
                techCount = 10;
                clearInterval(techInterval);
              }
              setCounters(prev => ({ ...prev, technologies: techCount }));
            }, 80);

            // Animate Satisfaction counter (100)
            let satisfactionCount = 0;
            const satisfactionInterval = setInterval(() => {
              satisfactionCount += 4;
              if (satisfactionCount >= 100) {
                satisfactionCount = 100;
                clearInterval(satisfactionInterval);
              }
              setCounters(prev => ({ ...prev, satisfaction: satisfactionCount }));
            }, 25);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentStatsRef);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section className="about-page" id="about">
      <div className="about-bg-glow about-glow-animated"></div>
      <div className="about-bg-grid"></div>

      <div className="about-container">
        {/* ABOUT HERO */}
        <div className="about-hero">
          {/* LEFT CONTENT */}
          <div className="about-content reveal-left">
            <div className="about-badge about-badge-animated">
              <Sparkles size={13} />
              About Techneysoft
            </div>
            <h1 className="about-heading-animated">
              We Build <span className="about-blue">Digital</span>
              <br />
              <span className="about-purple">
                Solutions That Move
              </span>
              <br />
              Businesses <span className="about-blue">Forward</span>
            </h1>
            <p className="about-description about-text-reveal" style={{ animationDelay: '0.2s' }}>
              Techneysoft is an IT solution company focused on
              building modern web solutions, software applications
              and digital products for businesses.
            </p>
            <p className="about-description about-text-reveal" style={{ animationDelay: '0.3s' }}>
              We combine technology, design and business
              understanding to create scalable digital solutions
              that deliver real value.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-visual reveal-right">
            <div className="about-image-container">
              <img 
                src="/image/office.png" 
                alt="Techneysoft Office" 
                className="about-office-image about-image-float"
              />
              <div className="about-floating-card floating-code about-float-card-animated" style={{ animationDelay: '0.5s' }}>
                <Code2 size={17} />
                <span>Innovation</span>
              </div>
              <div className="about-floating-card floating-tech about-float-card-animated" style={{ animationDelay: '0.7s' }}>
                <Sparkles size={17} />
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATISTICS - 2x2 GRID */}
        <div className="about-statistics" ref={statsRef}>
          <div className="about-stat-card reveal reveal-delay-1 about-stat-hover">
            <div className="about-stat-icon purple-stat about-icon-animated">
              <Users size={26} />
            </div>
            <div className="about-stat-info">
              <h3 className="about-counter">{counters.projects}+</h3>
              <p>Projects & Solutions</p>
            </div>
          </div>

          <div className="about-stat-card reveal reveal-delay-2 about-stat-hover">
            <div className="about-stat-icon blue-stat about-icon-animated">
              <Layers3 size={26} />
            </div>
            <div className="about-stat-info">
              <h3 className="about-counter">{counters.technologies}+</h3>
              <p>Technology Skills</p>
            </div>
          </div>

          <div className="about-stat-card reveal reveal-delay-3 about-stat-hover">
            <div className="about-stat-icon purple-stat about-icon-animated">
              <Headset size={26} />
            </div>
            <div className="about-stat-info">
              <h3>24/7</h3>
              <p>Digital Support</p>
            </div>
          </div>

          <div className="about-stat-card reveal reveal-delay-4 about-stat-hover">
            <div className="about-stat-icon blue-stat about-icon-animated">
              <Sparkles size={26} />
            </div>
            <div className="about-stat-info">
              <h3 className="about-counter">{counters.satisfaction}%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* LEARN MORE */}
        <div className="about-action reveal">
          <a href="/#services" className="about-learn-btn about-btn-animated">
            Learn More
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
