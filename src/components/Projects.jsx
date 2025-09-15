import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const projects = [
  {
    title: "E-Commerce Fashion Store",
    link: "https://freakyfashion.netlify.app/",
    description:
      "An E-Commerce Website built with Node.js & Angular. Full backend with database storing products dynamically.",
  },
  {
    title: "Habit Tracker App",
    link: "https://studenthabittracker.netlify.app/",
    description:
      "A modern, fully responsive habit tracking app built with React. Track daily habits, set goals, visualize progress.",
  },
  {
    title: "Restaurant/Cafe Website",
    link: "https://fikastugan.netlify.app/",
    description:
      "A modern, responsive website for a cafe. Features menu, location info, and contact form.",
  },
  {
    title: "Barber Shop Website",
    link: "https://klippochstil.netlify.app/",
    description:
      "A modern, responsive website for a barber shop. Includes booking system, services, pricing, and gallery.",
  },
  {
    title: "Photography Portfolio Website",
    link: "https://nordicmoments.netlify.app/",
    description:
      "A sleek, modern photography portfolio with responsive galleries, interactive UI, and smooth transitions.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 px-8 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full glassmorphic-card p-8 rounded-3xl shadow-xl border border-green-400/20 backdrop-blur-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
          <TypewriterText text="Projects" delay={150} />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 0 12px #00eaff" }}
              className="project-card bg-gradient-to-br from-cyan-900/60 to-pink-900/60 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-neon"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200">
                View Demo
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute top-1/4 left-0 w-20 h-20 bg-green-400/20 rounded-full blur-2xl animate-float3" />
      <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
    </section>
  );
}
