import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(true); // show/hide scroll arrow

  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToNextSection = () => {
    const scrollPos = window.scrollY;
    const nextSection = sections.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      return el.offsetTop > scrollPos + 10;
    });
    if (nextSection) {
      const el = document.getElementById(nextSection);
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;
      // fade arrow out if user has scrolled to Contact
      const scrolledToContact =
        window.scrollY + window.innerHeight >= contactSection.offsetTop;
      setShowArrow(!scrolledToContact);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-x-hidden">
      {/* Floating neon overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-float2" />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Scroll arrow fixed at bottom middle (matches Hero style) */}
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
          showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToNextSection}
          className="flex items-center justify-center w-12 h-12 hover:scale-120 hover:text-pink-500 transition-transform duration-300"
          aria-label="Scroll to next section"
        >
          <svg
            className="h-6 w-6 text-cyan-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
