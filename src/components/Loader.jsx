import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]

            bg-ink
            text-cream

            flex
            items-center
            justify-center

            overflow-hidden

            px-6
          "
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >

          {/* =====================================================
              GRAPHIC GRID
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.045]

              bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]

              bg-[size:40px_40px]
              sm:bg-[size:55px_55px]
              md:bg-[size:70px_70px]
            "
          />

          {/* =====================================================
              LARGE GRAPHIC MONOGRAM
          ===================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? {
                    opacity: 0.025,
                    scale: 1,
                    rotate: 0,
                  }
                : {
                    opacity: 0,
                    scale: 0.92,
                    rotate: -6,
                  }
            }
            animate={{
              opacity: 0.035,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute

              font-display
              font-black

              text-[55vw]
              sm:text-[45vw]
              md:text-[35vw]

              leading-none

              tracking-[-0.08em]

              text-cream

              select-none
            "
          >
            LN
          </motion.div>


          {/* =====================================================
              DECORATIVE ORANGE CIRCLE
          ===================================================== */}

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 0.6,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute

              w-36
              h-36

              sm:w-48
              sm:h-48

              md:w-64
              md:h-64

              rounded-full

              border
              border-[#D97757]/20

              -translate-x-20
              -translate-y-16

              sm:-translate-x-32
              sm:-translate-y-20

              md:-translate-x-44
              md:-translate-y-28
            "
          />

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div
            className="
              relative
              z-10

              w-full
              max-w-[520px]

              flex
              flex-col
              items-center

              text-center
            "
          >

            {/* =================================================
                TOP LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                items-center
                gap-3

                mb-5
              "
            >
              <span className="h-px w-6 bg-[#D97757]/70" />

              <span
                className="
                  font-mono

                  text-[8px]
                  sm:text-[9px]
                  md:text-[10px]

                  tracking-[0.3em]

                  uppercase

                  text-[#D97757]
                "
              >
                UI / UX · GRAPHIC DESIGNER
              </span>

              <span className="h-px w-6 bg-[#D97757]/70" />
            </motion.div>


            {/* =================================================
                WELCOME TEXT
            ================================================= */}

            <motion.h1
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
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                font-display

                font-medium

                uppercase

                text-xl
                sm:text-2xl
                md:text-3xl

                leading-[1.1]

                tracking-[0.03em]

                text-cream
              "
            >
              Welcome to
              <br />

              <span className="text-cream/45">
                Logesh Nithin's Portfolio
              </span>
            </motion.h1>


            {/* =================================================
                GRAPHIC LINE
            ================================================= */}

            <div
              className="
                relative

                mt-7
                sm:mt-8

                w-40
                sm:w-48
                md:w-56

                h-px

                bg-cream/10

                overflow-hidden
              "
            >
              <motion.div
                className="
                  absolute
                  inset-y-0
                  left-0

                  w-full

                  bg-[#D97757]

                  origin-left
                "
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.25,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>


            {/* =================================================
                DESIGNER TAG
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.65,
              }}
              className="
                mt-4

                font-sans

                text-[9px]
                sm:text-[10px]

                tracking-[0.18em]

                uppercase

                text-cream/30
              "
            >
              Designing interfaces · shaping experiences
            </motion.p>


            {/* =================================================
                YEAR
            ================================================= */}

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.85,
              }}
              className="
                mt-7

                font-mono

                text-[8px]
                sm:text-[9px]

                tracking-[0.25em]

                text-cream/20
              "
            >
              2026
            </motion.span>

          </div>


          {/* =====================================================
              BOTTOM CORNER DETAILS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="
              absolute

              bottom-5
              left-6
              right-6

              sm:bottom-7
              sm:left-8
              sm:right-8

              flex
              items-center
              justify-between

              font-mono

              text-[7px]
              sm:text-[8px]

              uppercase

              tracking-[0.2em]

              text-cream/20
            "
          >
            <span>Portfolio</span>

            <span>Selected Work</span>

            <span>01 / 01</span>
          </motion.div>


          {/* =====================================================
              CURTAIN EXIT
          ===================================================== */}

          <motion.div
            className="
              absolute
              inset-0

              bg-[#08080a]

              pointer-events-none

              origin-top
            "
            initial={{
              scaleY: 1,
            }}
            animate={{
              scaleY: 0,
            }}
            transition={{
              delay: 1.35,
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}

