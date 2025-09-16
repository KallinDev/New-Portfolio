import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profilePic from "../assets/profile-pic.webp";
import heroBg from "../assets/hero-bg.jpg";
import TypewriterText from "./TypewriterText";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/kallindev",
      icon: <SiGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/gustavkallin",
      icon: <SiLinkedin />,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 pt-[5rem] md:pt-0"
      style={{ scrollMarginTop: "5rem" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      {/* Dark Overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60" />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full animate-float2 opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-50"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left max-w-md md:max-w-lg"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-cyan-400 font-mono mb-2"
          >
            HI THERE <span className="animate-wave">👋</span> I'M
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-neon break-words gradient-text">
            <TypewriterText text="Gustav Kallin" delay={150} />
          </h1>

          <p className="text-xl md:text-2xl text-cyan-400 font-mono mb-4">
            <TypewriterText text="WEB DEVELOPER + UX/UI DESIGNER" delay={100} />
          </p>

          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            I create advanced, visually stunning web experiences with modern
            tech, glassmorphism, and interactive UI.
          </p>

          {/* Button + Socials */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-500"
            >
              Explore My Work
            </button>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:scale-110 transition-all duration-300 hover:drop-shadow-neon"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Profile Pic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 1,
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-gradient-to-br from-cyan-900/60 to-pink-900/60 backdrop-blur-xl shadow-2xl border border-cyan-400/30 flex items-center justify-center relative overflow-hidden">
            <img
              src={profilePic}
              alt="Gustav Kallin"
              className="w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
