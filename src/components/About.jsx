import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

export default function About() {
  return (
    <section
      id="about"
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
        className="max-w-2xl w-full glassmorphic-card p-8 rounded-3xl shadow-xl border border-cyan-400/20 backdrop-blur-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-neon">
          <TypewriterText text="About Me" delay={150} />
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          I’m Gustav Kallin, a web developer and digital creator who merges
          cutting-edge technology with immersive, futuristic design. My work
          transforms everyday websites into interactive experiences that feel
          alive, blending sleek interfaces with motion, depth, and glassmorphic
          visuals.
        </p>
        <p className="text-base text-gray-400 mb-2">
          With expertise in React, TailwindCSS, and modern animation libraries,
          I craft high-performance, visually stunning web applications that
          captivate users while remaining highly functional and intuitive.
        </p>
        <p className="text-base text-gray-400">
          Always exploring new trends and technologies, I aim to push the
          boundaries of what’s possible on the web—creating interfaces that are
          not only seen, but felt.
        </p>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
    </section>
  );
}
