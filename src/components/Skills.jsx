"use client";

import { motion, useReducedMotion } from "framer-motion";
import RevealText from "./RevealText";
import {
  SiFigma,
  SiFramer,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremiere,
} from "react-icons/tb";
import { Sparkles, Palette } from "lucide-react";

// Real brand icon + brand color for each tool.
// Colors are the actual brand hues, used at low opacity/as accents so they
// read as highlights against the dark ink/cream theme.
// Note: Adobe pulled several of their icons from the Simple Icons set, so
// XD, Photoshop, Illustrator, and Premiere Pro come from Tabler Icons
// (react-icons/tb) instead. Canva has no brand icon in either icon set
// bundled with this project, so it uses a neutral lucide "Palette" icon
// in Canva's brand teal — swap in a custom SVG/logo asset if you have one.
//
// Order is deliberate: design tools first (what the work is made in),
// then motion/prototyping, then front-end/code tools last.
const DESIGN_ROW = [
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Adobe XD", Icon: TbBrandAdobeXd, color: "#FF61F6" },
  { name: "Adobe Illustrator", Icon: TbBrandAdobeIllustrator, color: "#FF9A00" },
  { name: "Adobe Photoshop", Icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
  { name: "Adobe Premiere Pro", Icon: TbBrandAdobePremiere, color: "#9999FF" },
  { name: "Canva", Icon: Palette, color: "#00C4CC" },
];

const DEV_ROW = [
  { name: "Framer", Icon: SiFramer, color: "#0055FF" },
  { name: "Framer Motion", Icon: Sparkles, color: "#B967FF" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
];

function SkillCard({ name, Icon, color }) {
  return (
    <div
      style={{ "--accent": color }}
      className="group relative flex shrink-0 flex-col items-center justify-center gap-3 w-[150px] md:w-[168px] px-5 py-7 rounded-2xl border border-line bg-cream/[0.03] text-center transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[var(--accent)]/50 hover:shadow-[0_14px_32px_-14px_var(--accent)]"
    >
      {/* Soft tinted glow behind the icon, brand-colored, hidden until hover.
          Pure CSS opacity transition — no JS, no per-frame recompute. */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
        }}
      />

      <Icon
        size={28}
        style={{ color }}
        className="relative z-10 opacity-80 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:rotate-[-6deg]"
      />

      <span className="relative z-10 text-sm md:text-[15px] font-medium text-cream/70 transition-colors duration-300 group-hover:text-cream whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ skills, direction = "left", duration = 32 }) {
  // Duplicate once so the strip can loop seamlessly at -50%.
  const track = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden marquee-mask">
      <div
        className="marquee-track flex w-max gap-4"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
      >
        {track.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative py-32 border-t border-line overflow-hidden"
    >
      {/* Ambient background glow — static, low blur radius, no per-frame
          filter repaint, so it stays purely decorative and cheap to render. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, rgba(97,218,251,0.10), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, rgba(242,78,30,0.09), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <span className="eyebrow">Toolkit</span>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-quicksand font-bold text-4xl md:text-6xl leading-[1.2] text-white max-w-2xl"
        >
          Skill's &amp; Tools I Use
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col gap-4 md:gap-5 mt-14"
      >
        <MarqueeRow skills={DESIGN_ROW} direction="left" duration={34} />
        <MarqueeRow skills={DEV_ROW} direction="right" duration={30} />
      </motion.div>

      <style jsx>{`
        /* Fade the row edges into the section so cards don't hard-cut. */
        .marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 6%,
            black 94%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 6%,
            black 94%,
            transparent
          );
        }

        /* GPU-accelerated transform-only animation — no layout thrash,
           no filter repaint, so it stays smooth even with many cards. */
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .marquee-mask:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        ${prefersReducedMotion
          ? `.marquee-track { animation: none; }`
          : ""}
      `}</style>
    </section>
  );
}