import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const EXPERIENCE = [
  {
    role: "UI/UX Designer",
    org: "Freelance",
    period: "2025 — 2026",
    desc: "Designed intuitive interfaces and eye-catching visuals for clients across health & wellness, AI, and promotional spaces — turning ideas into clean, modern, user-friendly designs.",
    tools: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    role: "Frontend Developer Intern",
    org: "Dev Infomatrix",
    period: "Jan 2026 — Mar 2026",
    desc: "Designed and developed responsive frontend components with HTML, CSS, JavaScript & React — delivering polished, user-friendly web experiences.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        bg-ink
        text-cream
        overflow-hidden
        px-3
        sm:px-4
        md:px-6
        lg:px-10

        py-10
        sm:py-12
        md:py-14
        lg:py-16
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 15 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-cream/30" />

            <span
              className="
                font-sans
                text-[9px]
                sm:text-[10px]
                tracking-[0.28em]
                uppercase
                text-cream/40
              "
            >
              Work Experience
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-display
              uppercase
              tracking-[-0.025em]
              leading-[0.95]

              text-[10vw]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]

              mt-4
            "
          >
            Where I've{" "}
            <span className="text-cream/35">
              Worked
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div
          ref={ref}
          className="
            relative

            mt-16
            sm:mt-20
            md:mt-24

            pl-8
            sm:pl-10
            md:pl-12
          "
        >
          {/* Static timeline */}
          <div
            className="
              absolute
              left-0
              top-2
              bottom-0
              w-px
              bg-cream/10
            "
          />

          {/* Animated timeline */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ height: lineHeight }}
              className="
                absolute
                left-0
                top-2
                w-px
                bg-cream/65
              "
            />
          )}

          {/* Reduced motion timeline */}
          {shouldReduceMotion && (
            <div
              className="
                absolute
                left-0
                top-2
                bottom-0
                w-px
                bg-cream/25
              "
            />
          )}

          {/* Jobs */}
          <div
            className="
              flex
              flex-col

              gap-16
              sm:gap-20
              md:gap-24
            "
          >
            {EXPERIENCE.map((job, i) => (
              <JobEntry
                key={`${job.role}-${job.org}`}
                job={job}
                index={i}
                reduced={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ===============================================================
   JOB ENTRY
================================================================= */

function JobEntry({ job, index, reduced }) {
  return (
    <motion.article
      initial={
        reduced
          ? {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              x: -18,
              filter: "blur(4px)",
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        delay: reduced ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        min-w-0
        max-w-3xl
        group
      "
    >

      {/* =====================================================
          TIMELINE NODE
      ===================================================== */}

      <motion.span
        initial={
          reduced
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 0,
                opacity: 0,
              }
        }
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.4,
          delay: reduced ? 0 : index * 0.1 + 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute

          -left-[33px]
          sm:-left-[37px]
          md:-left-[45px]

          top-1.5

          w-2
          h-2

          rounded-full

          bg-cream

          shadow-[0_0_0_4px_rgba(242,239,231,0.06)]
        "
      />

      {/* =====================================================
          PERIOD
      ===================================================== */}

      <span
        className="
          font-mono

          text-[9px]
          sm:text-[10px]

          tracking-[0.12em]
          uppercase

          text-cream/35
        "
      >
        {job.period}
      </span>

      {/* =====================================================
          ROLE
      ===================================================== */}

      <h3
        className="
          font-display
          uppercase

          text-[6.5vw]
          sm:text-3xl
          md:text-4xl
          lg:text-[2.6rem]

          tracking-[-0.02em]
          leading-[1]

          mt-2

          text-cream

          transition-colors
          duration-300

          group-hover:text-cream/85
        "
      >
        {job.role}
      </h3>

      {/* =====================================================
          COMPANY
      ===================================================== */}

      <p
        className="
          font-sans

          text-xs
          sm:text-sm

          mt-1.5

          text-cream/40

          group-hover:text-cream/55

          transition-colors
          duration-300
        "
      >
        {job.org}
      </p>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          font-sans

          text-sm
          sm:text-[15px]

          leading-[1.7]

          text-cream/55

          mt-4

          max-w-xl
        "
      >
        {job.desc}
      </p>

      {/* =====================================================
          TOOLS
      ===================================================== */}

      <div
        className="
          flex
          flex-wrap
          gap-2

          mt-5
        "
      >
        {job.tools.map((tool, toolIndex) => (
          <motion.span
            key={tool}
            initial={
              reduced
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 6,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.4,
              delay: reduced
                ? 0
                : index * 0.1 + 0.25 + toolIndex * 0.04,
            }}
            className="
              text-[9px]
              sm:text-[10px]

              tracking-wide

              border
              border-cream/10

              rounded-full

              px-3
              py-1.5

              text-cream/40

              bg-cream/[0.02]

              transition-all
              duration-300

              hover:border-cream/25
              hover:text-cream/70
              hover:bg-cream/[0.04]
            "
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}
