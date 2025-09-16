import React from "react";
import { Card } from "./ui/Card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Front-End Focus",
      description: "Building responsive and interactive interfaces",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing designs",
    },
    {
      icon: Rocket,
      title: "Fast Learning",
      description: "Quickly adapting to new frameworks and tools",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team projects",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Angular",
    "Node.js",
    "Express.js",
    "UI/UX Design",
    "Figma",
    "Photoshop",
    "Canva",
    "Git",
    "GitHub",
    "Netlify",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-neon text-white">
          <TypewriterText text="About Me" delay={150} />
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m a Student Front-End Developer passionate about building engaging
          web experiences using modern technologies and intuitive designs.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl w-full">
        {/* Left: About Card */}
        <Card className="p-8 hover:neon-glow transition-transform duration-500 transform hover:-translate-y-2 bg-white/5 border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6 text-white">
            Front-End Developer & Designer
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am a student developer specializing in front-end technologies like
            React, Angular, and modern JavaScript. I enjoy turning design
            concepts into fully functional, responsive websites.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Alongside coding, I focus on UI/UX design using Figma, Photoshop,
            and Canva. I’m constantly learning new tools and frameworks to
            create smooth, interactive, and visually appealing web experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Right: Highlights */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:neon-glow-pink transition-transform duration-500 transform hover:-translate-y-1 bg-white/5 border-white/20"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-300 text-center">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative floating blobs */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-0 right-1/3 w-16 h-16 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
    </section>
  );
}
