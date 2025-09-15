import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import ScrollArrow from "./ScrollArrow";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "Node.js",
  "UI/UX Design",
  "Angular",
  "Express.js",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 px-8 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: [40, 28, 40],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          },
        }}
        className="max-w-3xl w-full glassmorphic-card p-8 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
          <TypewriterText text="Skills" delay={150} />
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400/30 to-pink-500/30 text-white font-semibold shadow-md hover:scale-105 hover:from-cyan-400 hover:to-pink-500 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      <div className="absolute top-1/3 right-0 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
      <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
    </section>
  );
}
