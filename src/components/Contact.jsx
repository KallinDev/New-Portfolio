import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import TypewriterText from "./TypewriterText";

export default function Contact() {
  const [status, setStatus] = useState(""); // "success" or "error"
  const [submitting, setSubmitting] = useState(false);

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
    { name: "X", link: "https://x.com/kallindev", icon: <SiX /> },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = e.target;
    const data = new FormData(form);

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        "6Ldp2corAAAAAEjkUqghGOt7Nf83wV7N4moMESiG", // PUBLIC SITE KEY
        { action: "contact" }
      );
      data.append("g-recaptcha-response", token);

      const res = await fetch("https://formspree.io/f/xeolwprg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 px-8 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full glassmorphic-card p-8 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
          <TypewriterText text="Contact" delay={150} />
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all duration-200"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all duration-200"
            rows={4}
          />

          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 rounded-full bg-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-400 font-semibold">
            Message sent! Thank you.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 font-semibold">
            Something went wrong. Try again.
          </p>
        )}

        {/* Socials */}
        <div className="mt-8 flex gap-6 justify-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:scale-110 transition-all duration-300 hover:drop-shadow-neon"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute top-1/2 right-0 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
      <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />

      {/* Load reCAPTCHA */}
      <script src="https://www.google.com/recaptcha/api.js?render=6Ldp2corAAAAAEjkUqghGOt7Nf83wV7N4moMESiG"></script>
    </section>
  );
}
