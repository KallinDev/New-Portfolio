import React, { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Fashion Store",
      description:
        "An E-Commerce Website built with Node.js & Angular. Full backend with database storing products dynamically.",
      link: "https://freakyfashion.netlify.app/",
      github: "https://github.com",
      tags: ["Node.js", "Angular", "Tailwind CSS", "Exress"],
      featured: false,
      image: project2,
    },
    {
      id: 2,
      title: "Habit Tracker App",
      description:
        "A modern, fully responsive habit tracking app built with React. Track daily habits, set goals, visualize progress.",
      link: "https://studenthabittracker.netlify.app/",
      github: "https://github.com",
      tags: ["React", "Tailwind CSS", "Node.js", "Express"],
      featured: true,
      image: project3,
    },
    {
      id: 3,
      title: "Restaurant/Cafe Website",
      description:
        "A modern, responsive website for a cafe. Features menu, location info, and contact form.",
      link: "https://fikastugan.netlify.app/",
      github: "https://github.com",
      tags: ["HTML/CSS", "JavaScript"],
      featured: false,
      image: project4,
    },
    {
      id: 4,
      title: "Barber Shop Website",
      description:
        "A modern, responsive website for a barber shop. Includes booking system, services, pricing, and gallery.",
      link: "https://klippochstil.netlify.app/",
      github: "https://github.com",
      tags: ["React", "Tailwind CSS"],
      featured: true,
      image: project5,
    },
    {
      id: 5,
      title: "Photography Portfolio Website",
      description:
        "A sleek, modern photography portfolio with responsive galleries, interactive UI, and smooth transitions.",
      link: "https://nordicmoments.netlify.app/",
      github: "https://github.com",
      tags: ["React", "Tailwind CSS"],
      featured: false,
      image: project6,
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      React: "bg-cyan-400 text-black",
      Angular: "bg-red-500 text-white",
      "Node.js": "bg-green-600 text-white",
      Express: "bg-yellow-400 text-black",
      "Tailwind CSS": "bg-cyan-500 text-white",
      "HTML/CSS": "bg-orange-400 text-black",
      JavaScript: "bg-yellow-300 text-black",
      "Framer Motion": "bg-pink-400 text-white",
      Netlify: "bg-green-400 text-white",
    };
    return colors[tech] || "bg-gray-400 text-white";
  };

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
        className="max-w-6xl w-full space-y-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
            <TypewriterText text="Projects" delay={150} />
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A selection of my recent projects showcasing different technologies
            and design approaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .slice() // shallow copy to avoid mutating original
            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)) // featured first
            .map((project, index) => (
              <motion.div
                key={project.id}
                className={`glassmorphic-card cursor-pointer p-0 rounded-3xl shadow-xl border border-green-400/20 backdrop-blur-xl overflow-hidden transition-transform duration-300 ${
                  hoveredProject === project.id
                    ? "scale-105 shadow-neon"
                    : "hover:shadow-neon"
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-500 text-white text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getTechColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:scale-105 transition-transform duration-200"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold hover:scale-105 transition-transform duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute top-1/4 left-0 w-20 h-20 bg-green-400/20 rounded-full blur-2xl animate-float3" />
      <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
    </section>
  );
};

export default Projects;
