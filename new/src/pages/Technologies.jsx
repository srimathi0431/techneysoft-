import React, { useState, useEffect, useRef } from "react";
import "./Technologies.css";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

const technologyCategories = [
  {
    id: 1,
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Build modern, responsive and engaging user interfaces using cutting-edge technologies.",
    color: "#803BFF",
    technologies: [
      { name: "React", emoji: "⚛️" },
      { name: "JavaScript", emoji: "🟨" },
      { name: "TypeScript", emoji: "🔷" },
      { name: "CSS3", emoji: "🎨" },
    ],
  },
  {
    id: 2,
    icon: Server,
    title: "Backend Development",
    description:
      "Develop powerful, secure and scalable backend systems, APIs and server-side applications.",
    color: "#A855F7",
    technologies: [
      { name: "Python", emoji: "🐍" },
      { name: "Node.js", emoji: "🟢" },
      { name: "Django", emoji: "🎯" },
      { name: "FastAPI", emoji: "⚡" },
    ],
  },
  {
    id: 3,
    icon: Database,
    title: "Database Technologies",
    description:
      "Manage application data using reliable, secure and high-performance database solutions.",
    color: "#6D5DFF",
    technologies: [
      { name: "PostgreSQL", emoji: "🐘" },
      { name: "MySQL", emoji: "🐬" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "Supabase", emoji: "⚡" },
    ],
  },
  {
    id: 4,
    icon: Cloud,
    title: "Servers & DevOps",
    description:
      "Deploy, manage and maintain scalable applications using modern cloud infrastructure.",
    color: "#8B5CF6",
    technologies: [
      { name: "AWS", emoji: "☁️" },
      { name: "Docker", emoji: "🐳" },
      { name: "Git", emoji: "🔧" },
      { name: "Linux", emoji: "🐧" },
    ],
  },
];

export default function Technologies() {
  const [flippedCards, setFlippedCards] = useState({});
  const [currentAutoIndex, setCurrentAutoIndex] = useState(0);
  const [isAutoFlipping, setIsAutoFlipping] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const autoFlipTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const flipBackTimerRef = useRef(null);

  // Clear all timers
  const clearAllTimers = () => {
    if (autoFlipTimerRef.current) {
      clearTimeout(autoFlipTimerRef.current);
      autoFlipTimerRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    if (flipBackTimerRef.current) {
      clearTimeout(flipBackTimerRef.current);
      flipBackTimerRef.current = null;
    }
  };

  // Auto flip logic
  useEffect(() => {
    if (!isAutoFlipping || userInteracted) return;

    const startAutoFlip = () => {
      const currentCategory = technologyCategories[currentAutoIndex];
      
      // Flip to back
      setFlippedCards({ [currentCategory.id]: true });
      
      // Flip back to front after 2 seconds, then move to next card
      flipBackTimerRef.current = setTimeout(() => {
        setFlippedCards({});
        
        // Move to next card after flipping back
        autoFlipTimerRef.current = setTimeout(() => {
          setCurrentAutoIndex((prev) => (prev + 1) % technologyCategories.length);
        }, 500);
      }, 2000);
    };

    startAutoFlip();

    return () => {
      clearAllTimers();
    };
  }, [currentAutoIndex, isAutoFlipping, userInteracted]);

  // Resume auto flip after 10 seconds of no interaction
  useEffect(() => {
    if (userInteracted) {
      // Clear existing resume timer
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      
      // Set new 10-second timer to resume auto flip
      resumeTimerRef.current = setTimeout(() => {
        setUserInteracted(false);
        setIsAutoFlipping(true);
      }, 10000);
    }

    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [userInteracted, flippedCards]);

  const handleCardClick = (categoryId) => {
    // Pause auto flip
    setIsAutoFlipping(false);
    setUserInteracted(true);
    
    // Clear all auto flip timers
    clearAllTimers();
    
    // Toggle the clicked card
    setFlippedCards((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
    
    // Update current index to the clicked card for seamless resume
    const clickedIndex = technologyCategories.findIndex(cat => cat.id === categoryId);
    if (clickedIndex !== -1) {
      setCurrentAutoIndex(clickedIndex);
    }
  };

  const handleExplore = (categoryId, e) => {
    e.stopPropagation();
    console.log('Opening service details for:', categoryId);
  };

  return (
    <section className="ts-tech-page" id="technologies">
      {/* Hero Header */}
      <div className="ts-tech-hero">
        <div className="ts-tech-badge">
          <Monitor size={16} />
          <span>Our Technologies</span>
        </div>
        <h1 className="ts-tech-main-title">
          Technologies We Use to Build{" "}
          <span className="ts-tech-highlight">Better Solutions</span>
        </h1>
        <p className="ts-tech-main-desc">
          A modern and reliable technology stack to create scalable, secure
          and high-performance digital products for businesses.
        </p>
      </div>

      {/* Flip Cards Grid */}
      <div className="ts-tech-flip-grid">
        {technologyCategories.map((category, index) => {
          const Icon = category.icon;
          const isFlipped = flippedCards[category.id];

          return (
            <div
              key={category.id}
              className={`ts-tech-flip-container ${
                isFlipped ? "flipped" : ""
              }`}
              onClick={() => handleCardClick(category.id)}
            >
              <div className="ts-tech-flip-card">
                {/* FRONT SIDE */}
                <div
                  className="ts-tech-card-front"
                  style={{ "--card-color": category.color }}
                >
                  <div className="ts-tech-front-content">
                    <div
                      className="ts-tech-card-icon"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon size={32} style={{ color: category.color }} />
                    </div>

                    <h3 className="ts-tech-card-title">{category.title}</h3>
                    <p className="ts-tech-card-desc">
                      {category.description}
                    </p>

                    <button
                      type="button"
                      className="ts-tech-flip-btn"
                      style={{ backgroundColor: category.color }}
                      onClick={(e) => handleExplore(category.id, e)}
                    >
                      <span>Explore Technologies</span>
                      <ArrowRight size={16} />
                    </button>

                    <div className="ts-tech-flip-indicator">
                      <RotateCcw size={14} />
                      <span>Click to flip</span>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div
                  className="ts-tech-card-back"
                  style={{ "--card-color": category.color }}
                >
                  <div className="ts-tech-back-content">
                    <div className="ts-tech-back-header">
                      <div
                        className="ts-tech-back-icon"
                        style={{ backgroundColor: `${category.color}15` }}
                      >
                        <Icon size={24} style={{ color: category.color }} />
                      </div>
                      <h3>{category.title}</h3>
                    </div>

                    <div className="ts-tech-tech-grid">
                      {category.technologies.map((tech, index) => (
                        <div key={index} className="ts-tech-tech-item">
                          <span className="ts-tech-tech-emoji">
                            {tech.emoji}
                          </span>
                          <span className="ts-tech-tech-name">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="ts-tech-back-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(category.id);
                      }}
                    >
                      <RotateCcw size={16} />
                      <span>Back</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
