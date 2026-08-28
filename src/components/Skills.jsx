```jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  SiPython,
  SiGo,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

import {
  Database,
  Server,
  Braces,
  Globe,
} from "lucide-react";

/* =========================================================
   BACKEND & DEVELOPMENT TOOLS
========================================================= */

const BACKEND_TOOLS = [
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Golang",
    Icon: SiGo,
    color: "#00ADD8",
  },
  {
    name: "REST APIs",
    Icon: Globe,
    color: "#61DAFB",
  },
  {
    name: "Backend Development",
    Icon: Server,
    color: "#A78BFA",
  },
  {
    name: "SQL",
    Icon: Database,
    color: "#F59E0B",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
];

/* =========================================================
   DEVELOPMENT TOOLS
========================================================= */

const DEVELOPMENT_TOOLS = [
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "JSON",
    Icon: Braces,
    color: "#F7DF1E",
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
      {/* =====================================================
          ICON
      ===================================================== */}

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

      {/* =====================================================
          NAME
      ===================================================== */}

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

      {/* =====================================================
          ACCENT
      ===================================================== */}

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
      {/* Group Header */}

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

      {/* Tools */}

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

      {/* =====================================================
          SUBTLE AMBIENT GLOW
      ===================================================== */}

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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

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
            y: prefersReducedMotion
              ? 0
              : 18,
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

          {/* =================================================
              INTRO
          ================================================= */}

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
                Technical Toolkit
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                font-quicksand

                text-4xl
                sm:text-5xl
                md:text-6xl

                font-bold

                leading-[1.05]

                tracking-[-0.04em]

                text-white
              "
            >
              Skills
              <br />

              <span className="text-white/25">
                & technologies.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-6

                max-w-md

                text-sm
                sm:text-base

                leading-relaxed

                text-white/40
              "
            >
              A focused development toolkit for
              building reliable backend services,
              REST APIs, database-driven applications,
              and modern full-stack solutions.
            </p>
          </div>

          {/* =================================================
              BOTTOM NOTE
          ================================================= */}

          <div
            className="
              mt-8

              hidden
              md:flex

              items-center
              gap-3
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
              Backend · APIs · Databases
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

          {/* Backend */}

          <ToolGroup
            number="01"
            title="Backend & APIs"
            tools={BACKEND_TOOLS}
          />

          {/* Development */}

          <ToolGroup
            number="02"
            title="Development & Tools"
            tools={DEVELOPMENT_TOOLS}
          />

        </div>
      </div>
    </section>
  );
}
```
