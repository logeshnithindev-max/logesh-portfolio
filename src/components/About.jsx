import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const paragraph =
  "I'm a UI/UX designer who turns ideas into simple, intuitive, and visually engaging digital experiences. With a background in frontend development, I bridge design and code — creating interfaces that are beautiful, practical, and buildable.";

/* ===============================================================
   WORD-BY-WORD SCROLL REVEAL
================================================================= */

function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const list = text.split(" ");

  return (
    <p
      ref={ref}
      className={`${className} max-w-3xl`}
    >
      {list.map((word, i) => {
        const start = i / list.length;
        const end = start + 1 / list.length;

        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            reduced={shouldReduceMotion}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}


/* ===============================================================
   WORD
================================================================= */

function Word({
  children,
  progress,
  range,
  reduced,
}) {
  const opacity = useTransform(
    progress,
    range,
    [0.18, 1]
  );

  const y = useTransform(
    progress,
    range,
    [6, 0]
  );

  return (
    <motion.span
      style={
        reduced
          ? undefined
          : {
              opacity,
              y,
            }
      }
      className="
        inline-block
        mr-[0.28em]
        will-change-transform
      "
    >
      {children}
    </motion.span>
  );
}


/* ===============================================================
   INFO CARD
================================================================= */

function InfoCard({
  label,
  title,
  detail,
  i,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 18,
            }
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
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : i * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        border-t
        border-cream/10

        pt-4
        sm:pt-5

        group
      "
    >
      {/* Label */}
      <p
        className="
          font-mono
          uppercase

          tracking-[0.18em]

          text-[9px]
          sm:text-[10px]

          text-[#D97757]

          mb-2
        "
      >
        {label}
      </p>

      {/* Title */}
      <h3
        className="
          font-display

          text-lg
          sm:text-xl

          leading-snug

          text-cream

          transition-colors
          duration-300

          group-hover:text-cream/85
        "
      >
        {title}
      </h3>

      {/* Detail */}
      <p
        className="
          font-sans

          text-xs
          sm:text-sm

          leading-relaxed

          text-cream/40

          mt-1.5
        "
      >
        {detail}
      </p>
    </motion.div>
  );
}


/* ===============================================================
   ABOUT SECTION
================================================================= */

export default function About() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Subtle eyebrow parallax */
  const eyebrowY = useTransform(
    scrollYProgress,
    [0, 1],
    [-20, 20]
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden

        bg-ink
        text-cream

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
            HEADER
        ===================================================== */}

        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : { y: eyebrowY }
          }
          className="w-full"
        >
          {/* Eyebrow */}
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-7 bg-[#D97757]/60" />

            <p
              className="
                font-mono
                uppercase

                tracking-[0.25em]

                text-[9px]
                sm:text-[10px]

                text-[#D97757]
              "
            >
              How I Work
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
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
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              font-black
              uppercase

              text-cream

              text-[12vw]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]

              leading-[0.92]

              tracking-[-0.025em]

              mt-3
            "
          >
            About Me
          </motion.h2>
        </motion.div>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            md:w-[83.333%]
            md:mx-auto

            space-y-7
            sm:space-y-8

            mt-12
            sm:mt-14
            md:mt-16
          "
        >

          {/* Main paragraph */}
          <ScrollWords
            text={paragraph}
            className="
              font-sans

              text-base
              sm:text-lg
              md:text-xl

              leading-[1.75]

              text-cream/85
            "
          />

          {/* Fresher statement */}
          <motion.p
            initial={
              shouldReduceMotion
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              font-sans

              text-sm
              sm:text-base

              leading-relaxed

              text-cream/50

              max-w-2xl
            "
          >
            I'm a fresher, eager to bring that background
            into my first professional role.
          </motion.p>


          {/* ===================================================
              INFO CARDS
          =================================================== */}

          <div
            className="
              grid

              grid-cols-1
              sm:grid-cols-2

              gap-8
              sm:gap-10

              pt-4
              sm:pt-6
            "
          >
            <InfoCard
              label="Status"
              title="Fresher"
              detail="Ready to start my first professional role"
              i={0}
            />

            <InfoCard
              label="Education"
              title="B.E. — Computer Science & Engineering"
              detail="2022 – 2026"
              i={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}