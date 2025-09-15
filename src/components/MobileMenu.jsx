import React from "react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function MobileMenu({ open, setOpen }) {
  const handleClick = (target) => {
    scrollToSection(target);
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full bg-black/30 backdrop-blur-md flex flex-col items-center justify-center gap-6">
        {navLinks.map((link) => (
          <button
            key={link.target}
            onClick={() => handleClick(link.target)}
            className="text-white text-lg font-medium hover:text-cyan-400 transition-colors duration-300"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleClick("contact")}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}
