import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Code2,
  Smartphone,
  Globe,
  Megaphone,
  Facebook,
  Instagram,
  Youtube,
  Search,
  ArrowUpRight,
  X,
  CheckCircle2,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    title: "Company Registration",
    subtitle: "Business Setup",
    description:
      "Professional company registration and business setup solutions to help establish your business.",
    icon: Building2,
    color: "#8B45F7",
    features: [
      "Company Registration",
      "Business Documentation",
      "Business Setup Assistance",
      "Registration Support",
    ],
  },
  {
    title: "Software Development",
    subtitle: "Custom Solutions",
    description:
      "Custom software solutions designed to improve business operations and digital experiences.",
    icon: Code2,
    color: "#287BFF",
    features: [
      "Custom Software",
      "Web Applications",
      "Business Automation",
      "Software Maintenance",
    ],
  },
  {
    title: "Mobile Application",
    subtitle: "iOS & Android",
    description:
      "Modern mobile applications with smooth performance and intuitive user experiences.",
    icon: Smartphone,
    color: "#00AFCB",
    features: [
      "Android Applications",
      "iOS Applications",
      "React Native Development",
      "App Maintenance",
    ],
  },
  {
    title: "Website Development",
    subtitle: "Web Solutions",
    description:
      "Responsive and modern websites built to strengthen your online business presence.",
    icon: Globe,
    color: "#4169E1",
    features: [
      "Business Websites",
      "E-Commerce Websites",
      "Landing Pages",
      "Web Applications",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "Brand Growth",
    description:
      "Digital marketing strategies that help businesses increase visibility and reach.",
    icon: Megaphone,
    color: "#E83EAA",
    features: [
      "Marketing Strategy",
      "Brand Promotion",
      "Campaign Management",
      "Online Advertising",
    ],
  },
  {
    title: "Facebook Promotion",
    subtitle: "Social Media",
    description:
      "Reach your target audience through professional Facebook marketing campaigns.",
    icon: Facebook,
    color: "#1877F2",
    features: [
      "Facebook Ads",
      "Audience Targeting",
      "Campaign Management",
      "Performance Tracking",
    ],
  },
  {
    title: "Instagram Promotion",
    subtitle: "Social Media",
    description:
      "Build your brand identity and audience through Instagram marketing.",
    icon: Instagram,
    color: "#D946EF",
    features: [
      "Instagram Ads",
      "Brand Promotion",
      "Content Strategy",
      "Audience Growth",
    ],
  },
  {
    title: "YouTube Marketing",
    subtitle: "Video Promotion",
    description:
      "Promote your brand and products through strategic YouTube marketing campaigns.",
    icon: Youtube,
    color: "#FF3030",
    features: [
      "YouTube Advertising",
      "Video Promotion",
      "Channel Growth",
      "Campaign Tracking",
    ],
  },
  {
    title: "Google Ads",
    subtitle: "Paid Advertising",
    description:
      "Reach potential customers with targeted Google advertising solutions.",
    icon: Search,
    color: "#13A66B",
    features: [
      "Search Ads",
      "Display Advertising",
      "Campaign Optimization",
      "Performance Reports",
    ],
  },
  {
    title: "Search Engine Optimization",
    subtitle: "SEO Solutions",
    description:
      "Improve website visibility and organic search presence with SEO strategies.",
    icon: Search,
    color: "#159B69",
    features: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "SEO Optimization",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const isDragging = useRef(false);

  const next = () => {
    setActive((prev) => (prev + 1) % services.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  // Automatic rotation every 4 seconds
  useEffect(() => {
    if (paused || selected) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, selected]);

  // Calculate carousel positions
  const getPosition = (index) => {
    let diff = index - active;
    if (diff > services.length / 2) {
      diff -= services.length;
    }
    if (diff < -services.length / 2) {
      diff += services.length;
    }
    return diff;
  };

  // Desktop mouse drag
  const handlePointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    startX.current = e.clientX;
    isDragging.current = false;
  };

  const handlePointerUp = (e) => {
    if (startX.current === null) return;
    const difference = startX.current - e.clientX;
    if (Math.abs(difference) > 55) {
      isDragging.current = true;
      difference > 0 ? next() : previous();
    }
    startX.current = null;
  };

  // Mobile touch swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const difference = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(difference) > 45) {
      difference > 0 ? next() : previous();
    }
    startX.current = null;
  };

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
        setPaused(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="ts-services-section" id="services">
      <div className="ts-services-heading">
        <span className="ts-services-badge">OUR SERVICES</span>
        <h2>
          Complete Digital & <span>Business Solutions</span>
        </h2>
        <p>
          From company registration to software development, we help businesses
          build, grow and succeed digitally.
        </p>
      </div>

      <div
        className="ts-carousel-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {services.map((service, index) => {
          const position = getPosition(index);
          if (Math.abs(position) > 2) return null;

          const Icon = service.icon;
          const positionClass =
            position === 0
              ? "center"
              : Math.abs(position) === 1
              ? "side"
              : "far";

          return (
            <article
              key={service.title}
              className={`ts-service-card ${positionClass}`}
              style={{
                "--card-color": service.color,
                "--position": position,
              }}
              onClick={() => {
                if (position !== 0) {
                  setActive(index);
                }
              }}
            >
              {/* ICON AREA - Centered in visual section */}
              <div className="ts-service-visual">
                <div className="ts-service-glow" />
                <div className="ts-service-icon-box">
                  <Icon size={48} strokeWidth={2} />
                </div>
                <span className="ts-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* CONTENT AREA */}
              <div className="ts-service-content">
                <h3>{service.title}</h3>
                <span className="ts-service-subtitle">{service.subtitle}</span>
                <p>{service.description}</p>
                <button
                  className="ts-service-learn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(service);
                    setPaused(true);
                  }}
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* SERVICE DETAILS MODAL */}
      {selected && (
        <div
          className="ts-service-overlay"
          onClick={() => {
            setSelected(null);
            setPaused(false);
          }}
        >
          <div
            className="ts-service-modal"
            style={{ "--card-color": selected.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="ts-modal-close"
              onClick={() => {
                setSelected(null);
                setPaused(false);
              }}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <div className="ts-modal-icon">
              {React.createElement(selected.icon, { size: 42 })}
            </div>

            <span className="ts-services-badge">OUR SERVICE</span>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>

            <h4>What We Offer</h4>
            <div className="ts-modal-features">
              {selected.features.map((feature) => (
                <div key={feature}>
                  <CheckCircle2 size={18} />
                  {feature}
                </div>
              ))}
            </div>

            <button
              className="ts-modal-action"
              onClick={() => {
                setSelected(null);
                setPaused(false);
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 150);
              }}
            >
              Get a Quote <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
