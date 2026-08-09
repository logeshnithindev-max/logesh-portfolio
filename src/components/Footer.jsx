"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";

// ⚠️ Same placeholder used in Contact.jsx — confirm your real email.
const EMAIL = "logeshnithin.dev@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/logesh-nithin-b79051366/";

// Real brand icon + brand color per platform.
const SOCIALS = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail, color: "#ff8a5c" },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: TbBrandLinkedin, color: "#0A66C2" },
  { label: "GitHub", href: "#", Icon: SiGithub, color: "#F3EEE3" },
  { label: "Dribbble", href: "#", Icon: SiDribbble, color: "#EA4C89" },
  { label: "Behance", href: "#", Icon: SiBehance, color: "#1769FF" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-line overflow-hidden">
      {/* Loads Quicksand directly so the plain/rounded look works even if
          it isn't wired into your Tailwind font config yet. If you'd
          rather manage fonts centrally (next/font, global CSS, etc.),
          delete this @import and register `font-quicksand` there instead. */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap");
        .font-quicksand {
          font-family: "Quicksand", ui-rounded, system-ui, sans-serif;
        }
      `}</style>
      {/* Single static glow — no animation, so it's free performance-wise. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(circle, #ff8a5c 0%, #8f7bff 60%, transparent 75%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center text-center gap-8">
        {/* Avatar — circular photo like the reference. Swap `avatarSrc`
            for a real headshot import (e.g. `import avatar from "../assets/avatar.jpg"`);
            until then this falls back to a soft initials circle so nothing
            looks broken. */}
    

        {/* Name — plain, rounded, friendly sans (Quicksand), matching the
            reference's typography but inverted for dark theme: solid
            white instead of black-on-white. No gradient, no italic —
            kept deliberately plain and decent per the reference. */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-quicksand font-bold text-4xl md:text-6xl leading-[1.2] text-white max-w-2xl"
        >
          I&apos;m Logesh, and I am a product &amp; UI/UX designer
        </motion.p>

        <p className="text-muted text-sm max-w-xs -mt-2 font-quicksand">
          Product &amp; UI/UX designer crafting clear, considered digital experiences.
        </p>

        {/* Status badge — small pulsing dot, cheap to animate. */}
        <div className="inline-flex items-center gap-2 rounded-full border border-line pl-2.5 pr-3.5 py-1.5">
          <span className="relative flex h-2 w-2">
            <motion.span
              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs uppercase tracking-[0.15em] text-cream/80">
            Open to opportunities
          </span>
        </div>

        {/* Social icon row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="flex items-center gap-3"
        >
          {SOCIALS.map(({ label, href, Icon, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-cursor="link"
              aria-label={label}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              style={{ "--accent": color }}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/60"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "color-mix(in srgb, var(--accent) 16%, transparent)" }}
              />
              <Icon size={17} style={{ color }} className="relative z-10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-line px-6 md:px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Logesh Nithin. All rights reserved.</p>
          <motion.a
            href="#top"
            data-cursor="link"
            whileHover={{ y: -3 }}
            className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-mono uppercase tracking-widest2 text-muted transition-colors duration-300 hover:text-cream hover:border-aurora2/60"
          >
            Back to top
            <ArrowUp size={14} className="text-aurora2 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}