"use client";

import {
  useState,
  useEffect,
  useCallback,
} from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import img01 from "../assets/projects/01.jpg";
import img02 from "../assets/projects/02.jpg";
import img03 from "../assets/projects/03.jpg";
import img04 from "../assets/projects/04.jpg";
import img05 from "../assets/projects/05.jpg";
import img06 from "../assets/projects/06.jpg";
import img07 from "../assets/projects/07.jpg";
import img08 from "../assets/projects/08.jpg";
import img09 from "../assets/projects/09.jpg";

const IMAGES = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img09,
  img08,
  img07,
];

/* ===============================================================
   MAXIMIZE ICON
================================================================= */

const MaximizeIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);


/* ===============================================================
   CLOSE ICON
================================================================= */

const CloseIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);


/* ===============================================================
   PROJECTS
================================================================= */

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  /* =============================================================
     KEYBOARD NAVIGATION + BODY LOCK
  ============================================================= */

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
      }

      if (e.key === "ArrowRight") {
        setActiveIndex(
          (i) => (i + 1) % IMAGES.length
        );
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex(
          (i) =>
            (i - 1 + IMAGES.length) %
            IMAGES.length
        );
      }
    };

    window.addEventListener("keydown", onKey);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);

      document.body.style.overflow =
        previousOverflow;
    };
  }, [activeIndex, close]);


  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden

        bg-ink
        text-cream

        px-5
        sm:px-7
        md:px-10
        lg:px-16
        xl:px-20

        py-20
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={
            prefersReducedMotion
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="
                h-px
                w-7
                bg-cream/30
              "
            />

            <span
              className="
                font-mono
                uppercase

                text-[9px]
                sm:text-[10px]

                tracking-[0.25em]

                text-cream/40
              "
            >
              Selected Work
            </span>
          </div>

          {/* Main title */}
          <h2
            className="
              font-display
              font-medium
              uppercase

              tracking-[-0.025em]
              leading-[0.95]

              text-cream

              text-[11vw]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.5rem]

              max-w-2xl
            "
          >
            Featured{" "}
            <span className="text-cream/35">
              Projects
            </span>
          </h2>

          {/* Supporting text */}
          <p
            className="
              mt-4

              max-w-lg

              font-sans

              text-sm
              sm:text-base

              leading-relaxed

              text-cream/45
            "
          >
            A selection of interfaces, visual explorations,
            and digital experiences I've designed and built.
          </p>
        </motion.div>


        {/* =====================================================
            MASONRY GALLERY
        ===================================================== */}

        <div
          className="
            columns-1

            sm:columns-2

            lg:columns-3

            xl:columns-4

            gap-2.5
            sm:gap-3
            lg:gap-4

            [column-fill:balance]
          "
        >
          {IMAGES.map((src, i) => (
            <motion.button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open project image ${i + 1}`}
              className="
                group
                relative

                mb-2.5
                sm:mb-3
                lg:mb-4

                block
                w-full

                break-inside-avoid

                overflow-hidden

                rounded-lg
                sm:rounded-xl

                border
                border-cream/[0.08]

                bg-cream/[0.02]

                text-left

                cursor-zoom-in

                focus:outline-none
                focus-visible:ring-1
                focus-visible:ring-cream/50
              "
              initial={
                prefersReducedMotion
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
                margin: "-8% 0px",
              }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image */}
              <img
                src={src}
                alt={`UI/UX project ${i + 1}`}
                draggable={false}
                loading="lazy"
                className="
                  block
                  w-full
                  h-auto

                  select-none

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.025]
                "
              />

              {/* =================================================
                  OVERLAY
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  flex
                  items-center
                  justify-center

                  bg-ink/0

                  opacity-0

                  transition-all
                  duration-400

                  group-hover:bg-ink/35
                  group-hover:opacity-100
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10

                    sm:h-11
                    sm:w-11

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/25

                    bg-ink/60

                    text-white

                    backdrop-blur-md

                    scale-90

                    transition-transform
                    duration-300

                    group-hover:scale-100
                  "
                >
                  <MaximizeIcon />
                </span>
              </div>

              {/* Mobile bottom gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-16

                  bg-gradient-to-t
                  from-ink/20
                  to-transparent

                  sm:hidden
                "
              />
            </motion.button>
          ))}
        </div>
      </div>


      {/* =========================================================
          LIGHTBOX
      ========================================================= */}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]

              flex
              items-center
              justify-center

              bg-ink/95
              backdrop-blur-md

              p-3
              sm:p-5
              md:p-10
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={close}
          >

            {/* ===================================================
                CLOSE BUTTON
            =================================================== */}

            <button
              type="button"
              aria-label="Close project preview"
              onClick={close}
              className="
                absolute

                right-3
                top-3

                sm:right-5
                sm:top-5

                md:right-8
                md:top-8

                z-10

                flex

                h-10
                w-10

                sm:h-11
                sm:w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-ink/70

                text-white

                backdrop-blur-md

                transition-all
                duration-300

                hover:bg-white
                hover:text-ink
              "
            >
              <CloseIcon />
            </button>


            {/* ===================================================
                IMAGE
            =================================================== */}

            <motion.img
              key={activeIndex}
              src={IMAGES[activeIndex]}
              alt={`Project ${activeIndex + 1}`}
              draggable={false}
              className="
                max-h-[88vh]
                sm:max-h-[90vh]

                max-w-[94vw]
                sm:max-w-[92vw]

                md:max-w-[90vw]

                w-auto
                h-auto

                object-contain

                select-none

                rounded-md
                sm:rounded-lg

                shadow-2xl
              "
              initial={
                prefersReducedMotion
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />

            {/* ===================================================
                MOBILE IMAGE COUNTER
            =================================================== */}

            <div
              className="
                absolute

                bottom-4
                sm:bottom-6

                left-1/2

                -translate-x-1/2

                font-mono

                text-[9px]
                sm:text-[10px]

                tracking-[0.2em]

                uppercase

                text-white/40
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(IMAGES.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

