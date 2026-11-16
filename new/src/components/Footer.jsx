import React from "react";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="ts-footer">
      <div className="ts-footer-inner">
        {/* BRAND */}
        <div className="ts-footer-brand">
          <span className="ts-footer-logo">TS</span>
          <span className="ts-footer-name">TECHNEYSOFT</span>
        </div>

        {/* LINKS */}
        <nav className="ts-footer-links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <a
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technologies');
            }}
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>

        {/* SOCIAL */}
        <div className="ts-footer-social">
          <a href="#" aria-label="Website"><Globe /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
        </div>

        {/* COPYRIGHT */}
        <div className="ts-footer-copy">
          © 2026 Techneysoft
        </div>
      </div>
    </footer>
  );
}
