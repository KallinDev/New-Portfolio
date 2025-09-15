import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.png";
import TypewriterText from "./TypewriterText";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex flex-col md:flex-row items-center justify-center
        gap-8 md:gap-12 lg:gap-16
        min-h-[90vh]
        px-4 sm:px-8 md:px-16 lg:px-24
        pt-32 sm:pt-36 md:pt-20   /* more top padding on mobile, normal on md+ */
        pb-8
        overflow-hidden
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          flex-1 z-10
          md:pl-8 lg:pl-16
          w-full md:w-auto
          mb-12 md:mb-0
          px-4 md:px-0
        "
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              const nameWrapper = document.querySelector("#hero-name-wrapper");
              const nameContent = document.querySelector("#hero-name-content");
              if (nameWrapper && nameContent) {
                nameWrapper.style.visibility = "visible";
                nameContent.dataset.startTyping = "true";
              }
            }, 200);
          }}
          className="text-lg text-cyan-400 font-mono mb-2"
        >
          HI THERE <span className="animate-wave">👋</span> I'M
        </motion.p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-neon break-words">
          <span id="hero-name-wrapper" style={{ visibility: "hidden" }}>
            <span id="hero-name-content">
              <TypewriterText
                text="Gustav Kallin"
                delay={150}
                waitForTrigger={true}
                onComplete={() => {
                  const elements = [
                    "#hero-subtitle",
                    "#hero-description",
                    "#hero-button",
                  ];
                  elements.forEach((selector, index) => {
                    setTimeout(() => {
                      const element = document.querySelector(selector);
                      element?.classList.add("opacity-100");
                    }, index * 400);
                  });
                }}
              />
            </span>
          </span>
        </h1>

        <h2
          id="hero-subtitle"
          className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 opacity-0 transition-all duration-1000"
        >
          WEB DEVELOPER + UX/UI DESIGNER
        </h2>

        <p
          id="hero-description"
          className="text-base text-gray-300 mb-6 max-w-md opacity-0 transition-all duration-1000"
        >
          I create advanced, visually stunning web experiences with modern tech,
          glassmorphism, and interactive UI.
        </p>

        <a
          id="hero-button"
          onClick={() => scrollToSection("contact")}
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold shadow-lg hover:scale-110 transition-all duration-500 opacity-0 cursor-pointer"
        >
          Hire Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          duration: 1,
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="flex-1 flex items-center justify-center z-10"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-gradient-to-br from-cyan-900/60 to-pink-900/60 backdrop-blur-xl shadow-2xl border border-cyan-400/30 flex items-center justify-center relative overflow-hidden">
          <img
            src={profilePic}
            alt="Gustav Kallin"
            className="w-full h-full object-cover mix-blend-luminosity opacity-90"
          />
        </div>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
      </div>
    </section>
  );
}
