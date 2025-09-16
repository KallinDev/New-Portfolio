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

export default function Header({ menuOpen, setMenuOpen }) {
  const handleClick = (target) => {
    scrollToSection(target);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center px-8 py-8 z-50 bg-transparent backdrop-blur-sm transition-opacity duration-300">
        {/* Left: Hamburger */}
        <div className="flex-1 flex items-center gap-2">
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-8 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleClick(link.target)}
              className="nav-link bg-transparent border-none outline-none cursor-pointer hover:text-cyan-400 transition-all duration-500 hover:scale-110"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right placeholder to preserve header height */}
        <div className="flex-1" />
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 pointer-events-none`}
      >
        {/* The “always-blurred” layer */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Menu content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleClick(link.target)}
              className="text-white text-lg font-medium hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
