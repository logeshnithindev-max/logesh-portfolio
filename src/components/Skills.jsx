"use client";

import { motion, useReducedMotion } from "framer-motion";

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

import {
  Sparkles,
  Palette,
} from "lucide-react";

/* =========================================================
   TOOLS
========================================================= */

const DESIGN_TOOLS = [
  {
    name: "Figma",
    Icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Adobe XD",
    Icon: TbBrandAdobeXd,
    color: "#FF61F6",
  },
  {
    name: "Illustrator",
    Icon: TbBrandAdobeIllustrator,
    color: "#FF9A00",
  },
  {
    name: "Photoshop",
    Icon: TbBrandAdobePhotoshop,
    color: "#31A8FF",
  },
  {
    name: "Premiere Pro",
    Icon: TbBrandAdobePremiere,
    color: "#9999FF",
  },
  {
    name: "Canva",
    Icon: Palette,
    color: "#00C4CC",
  },
];

const DEVELOPMENT_TOOLS = [
  {
    name: "Framer",
    Icon: SiFramer,
    color: "#0055FF",
  },
  {
    name: "Framer Motion",
    Icon: Sparkles,
    color: "#B967FF",
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "HTML",
    Icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    Icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "#38BDF8",
  },
];

/* =========================================================
   TOOL ITEM
========================================================= */

function ToolItem({
  name,
  Icon,
  color,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        flex
        items-center
        gap-3
        border-b
        border-white/[0.07]
        py-3
        sm:py-3.5
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/[0.07]
          bg-white/[0.025]
          transition-all
          duration-300
          group-hover:border-white/[0.15]
          group-hover:bg-white/[0.05]
        "
      >
        <Icon
          size={16}
          style={{
            color,
          }}
          className="
            opacity-70
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:opacity-100
          "
        />
      </div>

      {/* Name */}
      <span
        className="
          text-sm
          tracking-tight
          text-white/55
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {name}
      </span>

      {/* Accent */}
      <span
        className="
          ml-auto
          h-1
          w-1
          rounded-full
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: color,
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   TOOL GROUP
========================================================= */

function ToolGroup({
  number,
  title,
  tools,
}) {
  return (
    <div>
      <div
        className="
          mb-2
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.2em]
            text-white/25
          "
        >
          {number}
        </span>

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/40
          "
        >
          {title}
        </span>
      </div>

      <div>
        {tools.map((tool, index) => (
          <ToolItem
            key={tool.name}
            {...tool}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        py-20
        sm:py-24
        md:py-28
      "
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          opacity-20
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(97,218,251,0.12), transparent 70%)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-12
          px-5
          sm:px-6
          md:grid-cols-[0.9fr_1.1fr]
          md:gap-20
          md:px-10
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            justify-between
            md:min-h-[360px]
          "
        >
          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-7
                  bg-cream/40
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                Toolkit
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-quicksand
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Skills
              <br />

              <span className="text-white/25">
                & tools.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-relaxed
                text-white/40
                sm:text-base
              "
            >
              A focused toolkit for designing
              meaningful interfaces and turning
              polished concepts into responsive,
              interactive experiences.
            </p>
          </div>

          {/* Bottom note */}
          <div
            className="
              mt-8
              hidden
              items-center
              gap-3
              md:flex
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.6)]
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Design · Motion · Development
            </span>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT TOOLS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            sm:gap-10
          "
        >
          <ToolGroup
            number="01"
            title="Design & Visual"
            tools={DESIGN_TOOLS}
          />

          <ToolGroup
            number="02"
            title="Development & Motion"
            tools={DEVELOPMENT_TOOLS}
          />
        </div>
      </div>
    </section>
  );
}
