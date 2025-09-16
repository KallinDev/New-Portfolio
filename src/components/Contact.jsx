import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
  ];

  const info = [
    {
      icon: <FaEnvelope className="text-pink-400" />,
      label: "Email",
      value: "gustav.kallin@live.se",
      href: "mailto:gustav.kallin@live.se",
    },
    {
      icon: <FaPhoneAlt className="text-pink-400" />,
      label: "Phone",
      value: "+46 76-851 60 16",
      href: "tel:+46768516016",
    },
    {
      icon: <FaMapMarkerAlt className="text-pink-400" />,
      label: "Location",
      value: "Västerås, Sweden",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const token = await window.grecaptcha.execute(
        "6Ldp2corAAAAAEjkUqghGOt7Nf83wV7N4moMESiG",
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
        className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 z-10"
      >
        {/* Left: Form */}
        <div className="glassmorphic-card p-8 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-neon">
            <TypewriterText text="Get In Touch" delay={150} />
          </h2>

          {/* FORM REVERTED TO CURRENT CODE STYLE */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all"
            />
            {/* Subject removed */}
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="glass-input px-5 py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white focus:border-pink-500 outline-none transition-all resize-none"
            />

            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
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
        </div>

        {/* Right: Info & Socials */}
        <div className="flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphic-card p-8 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-neon">
              Contact Information
            </h3>
            <div className="space-y-6">
              {info.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-cyan-300 hover:text-pink-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cyan-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphic-card p-8 rounded-3xl shadow-xl border border-pink-500/20 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-neon">
              Follow Me
            </h3>
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:scale-110 transition-all duration-300 hover:drop-shadow-neon"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating blobs */}
      <div className="absolute top-1/2 right-0 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-float2" />
      <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl animate-float" />

      {/* reCAPTCHA script */}
      <script src="https://www.google.com/recaptcha/api.js?render=6Ldp2corAAAAAEjkUqghGOt7Nf83wV7N4moMESiG"></script>
    </section>
  );
}
