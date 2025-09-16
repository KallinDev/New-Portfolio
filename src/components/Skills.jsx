import React, { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    // Frontend
    { name: "React", category: "Frontend", level: 95 },
    { name: "JavaScript", category: "Frontend", level: 90 },
    { name: "TypeScript", category: "Frontend", level: 88 },
    { name: "HTML/CSS", category: "Frontend", level: 92 },
    { name: "Angular", category: "Frontend", level: 80 },

    // Backend
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express.js", category: "Backend", level: 83 },

    // Design
    { name: "UI/UX Design", category: "Design", level: 87 },
    { name: "Photoshop", category: "Design", level: 75 },
    { name: "Figma", category: "Design", level: 85 },
    { name: "Canva", category: "Design", level: 80 },

    // DevOps
    { name: "Git", category: "DevOps", level: 90 },
    { name: "GitHub", category: "DevOps", level: 88 },
    { name: "Azure DevOps", category: "DevOps", level: 70 },
    { name: "Google Cloud", category: "DevOps", level: 78 },
    { name: "Netlify", category: "DevOps", level: 85 },
  ];

  const categories = ["All", "Frontend", "Backend", "Design", "DevOps"];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Frontend":
        return "bg-cyan-400 text-black";
      case "Backend":
        return "bg-pink-500 text-white";
      case "Design":
        return "bg-purple-500 text-white";
      case "DevOps":
        return "bg-green-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 px-8 flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
          <TypewriterText text="Skills" delay={150} />
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          A selection of my skills showcasing different technologies and design
          approaches
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === category
                ? "bg-white text-black shadow-neon"
                : "bg-white/20 text-white hover:bg-white/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="glassmorphic-card p-6 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Skill Name + Category */}
            <div className="flex items-center mb-4 space-x-3">
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                  skill.category
                )}`}
              >
                {skill.category}
              </span>
            </div>

            {/* Proficiency Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Neon Circles */}
      <div className="absolute top-1/3 right-0 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
      <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
    </section>
  );
};

export default Skills;
