import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Blocks,
  Megaphone,
  Activity,
  Cpu,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import "./Home.css";

const serviceItems = [
  {
    title: "Software\nDevelopment",
    icon: Code2,
    tone: "violet",
  },
  {
    title: "Mobile\nApplications",
    icon: Smartphone,
    tone: "orange",
  },
  {
    title: "Blockchain\n& Web3",
    icon: Blocks,
    tone: "green",
  },
  {
    title: "Digital\nMarketing",
    icon: Megaphone,
    tone: "blue",
  },
];

const trustItems = [
  "Reliable",
  "Scalable",
  "Secure",
  "Global Support",
];

export default function Home() {
  return (
    <main className="ts-home" id="home">
      {/* HERO SECTION */}
      <section
        className="ts-hero"
        aria-labelledby="hero-title"
      >
        {/* LEFT CONTENT */}
        <div className="ts-hero-copy">
          <div className="ts-eyebrow">
            <span className="ts-eyebrow-dot" />
            Global IT & Blockchain Solutions
          </div>
          <h1 id="hero-title">
            Technology That Builds
            <br className="desktop-break" />
            Your <span>Digital Future</span>
          </h1>
          <p className="ts-hero-description">
            Techneysoft delivers modern IT solutions,
            websites and applications designed to help
            businesses grow, connect and scale.
          </p>
          {/* BUTTONS */}
          <div className="ts-hero-actions">
            <a
              className="ts-btn ts-btn-primary"
              href="#contact"
            >
              Start Your Project
              <ArrowRight size={17} />
            </a>
            <a
              className="ts-btn ts-btn-outline"
              href="#services"
            >
              Explore Solutions
              <ArrowUpRight size={16} />
            </a>
          </div>
          {/* TRUST INDICATORS */}
          <div className="ts-trust-row">
            {trustItems.map((item) => (
              <span key={item}>
                <CheckCircle2 size={14} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT HERO ARTWORK */}
        <div
          className="ts-hero-art"
          aria-label="Futuristic digital technology illustration"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow art-glow-cyan" />
          <div className="art-glow art-glow-purple" />

          {/* LEFT TECHNOLOGY PANEL */}
          <div className="art-panel art-panel-left">
            <div className="art-panel-top">
              <span />
              <span />
              <span />
            </div>
            <Activity
              className="art-panel-icon"
              size={24}
            />
            <div className="art-waveform">
              {[
                18, 30, 14, 42, 24, 50, 20,
                34, 15, 44, 25, 38, 18, 30
              ].map((height, i) => (
                <i
                  key={i}
                  style={{
                    height: `${height}px`
                  }}
                />
              ))}
            </div>
            <small>LIVE SYSTEM MONITOR</small>
          </div>

          {/* MAIN DIGITAL SCREEN */}
          <div className="art-main-screen">
            <div className="art-screen-top">
              <span className="art-screen-brand">
                <Cpu size={15} />
                TECH<span>CORE</span>
              </span>
              <span className="art-live">
                <i />
                LIVE
              </span>
            </div>
            <div className="art-screen-heading">
              Digital ecosystem
            </div>
            <div className="art-screen-sub">
              Connected. Intelligent. Scalable.
            </div>
            {/* DIGITAL VISUAL */}
            <div className="art-screen-visual">
              <div className="art-visual-ring ring-a" />
              <div className="art-visual-ring ring-b" />
              <div className="art-visual-core">
                <Zap size={34} />
              </div>
              <div className="art-visual-line line-a" />
              <div className="art-visual-line line-b" />
              <div className="art-visual-line line-c" />
            </div>
            {/* SCREEN STATISTICS */}
            <div className="art-screen-bottom">
              <span>
                <b>99.9%</b>
                <small>UPTIME</small>
              </span>
              <span>
                <b>24/7</b>
                <small>MONITORING</small>
              </span>
              <span>
                <b>GLOBAL</b>
                <small>NETWORK</small>
              </span>
            </div>
          </div>

          {/* RIGHT TECHNOLOGY PANEL */}
          <div className="art-panel art-panel-right">
            <div className="art-chip">
              <Globe2 size={21} />
            </div>
            <div className="art-mini-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>GLOBAL CONNECTIVITY</small>
          </div>

          {/* FLOATING CARDS */}
          <div className="art-float-card float-card-top">
            <ShieldCheck size={18} />
            <span>
              <b>Secure Systems</b>
              <small>Built for confidence</small>
            </span>
          </div>
          <div className="art-float-card float-card-bottom">
            <div className="float-card-icon">
              <Code2 size={17} />
            </div>
            <span>
              <b>Smart Solutions</b>
              <small>Made to move business</small>
            </span>
          </div>

          {/* LIGHT WAVES */}
          <div className="art-wave wave-back" />
          <div className="art-wave wave-front" />
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section
        className="ts-service-strip"
        id="services"
        aria-label="Featured services"
      >
        {serviceItems.map(
          ({ title, icon: Icon, tone }) => (
            <a
              className="ts-service-card"
              href="#contact"
              key={title}
            >
              <span
                className={`ts-service-icon ${tone}`}
              >
                <Icon
                  size={25}
                  strokeWidth={2.4}
                />
              </span>
              <strong>
                {title.split("\n").map(
                  (line, index) => (
                    <React.Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  )
                )}
              </strong>
              <span className="ts-service-arrow">
                <ArrowUpRight size={17} />
              </span>
            </a>
          )
        )}
      </section>

      <div className="ts-bottom-glow" />

      {/* NAVIGATION TARGETS */}
      <div
        className="ts-anchor-targets"
        aria-hidden="true"
      >
        <span id="about" />
        <span id="technologies" />
        <span id="projects" />
        <span id="contact" />
      </div>
    </main>
  );
}
