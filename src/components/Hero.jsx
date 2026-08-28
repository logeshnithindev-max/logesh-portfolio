import { motion, useReducedMotion } from "framer-motion";
import Magnetic from "./Magnetic";
import Profile from "../assets/Profile.png";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Premium, slow, editorial ease
  const ease = [0.16, 1, 0.3, 1];
  const softEase = [0.19, 1, 0.22, 1];

  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-ink text-cream
        flex flex-col md:flex-row
      "
    >
      {/* =========================================================
          LANDING CURTAIN
      ========================================================= */}

      {!shouldReduceMotion && (
        <motion.div
          className="
            fixed
            inset-0
            z-[100]
            bg-ink
            pointer-events-none
          "
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            transformOrigin: "top",
          }}
        />
      )}

      {/* =========================================================
          MOBILE TOP LABEL
      ========================================================= */}

      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 0,
                y: -10,
                filter: "blur(6px)",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.35,
          duration: 1,
          ease: softEase,
        }}
        className="
          absolute
          top-6
          left-6
          right-6
          z-20

          flex
          items-center
          justify-between

          md:hidden
        "
      >
        <span
          className="
            font-sans
            text-[10px]
            tracking-[0.32em]
            uppercase
            text-cream/45
          "
        >
          Software Developer
        </span>

        <span
          className="
            font-sans
            text-[10px]
            tracking-[0.25em]
            uppercase
            text-cream/35
          "
        >
          2026
        </span>
      </motion.div>

      {/* =========================================================
          PORTRAIT
      ========================================================= */}

      <div
        className="
          relative

          order-1
          w-full

          md:order-2
          md:flex-1

          min-w-0

          flex
          items-center
          justify-center

          pt-24
          pb-8
          px-6

          sm:pt-28
          sm:pb-10

          md:pt-0
          md:pb-0
          md:px-0

          overflow-hidden
        "
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  scale: 1.18,
                  y: 60,
                  filter: "blur(18px)",
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.4,
            duration: 2.1,
            ease: softEase,
          }}
          className="
            relative

            w-[min(72vw,360px)]
            h-[min(72vw,360px)]

            sm:w-[min(65vw,400px)]
            sm:h-[min(65vw,400px)]

            md:w-full
            md:h-full
            md:max-h-screen

            rounded-full
            md:rounded-none

            overflow-hidden

            md:ring-0
            ring-1
            ring-cream/10

            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            md:shadow-none
          "
        >
          <img
            src={Profile}
            alt="Logesh Nithin — Software Developer"
            className="
              w-full
              h-full
              object-cover
              object-center
              md:object-top
            "
            style={{
              filter:
                "grayscale(1) contrast(1.08) brightness(0.97)",
            }}
          />

          {/* Mobile image fade */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              md:hidden

              bg-gradient-to-t
              from-ink/20
              via-transparent
              to-transparent

              pointer-events-none
            "
          />
        </motion.div>

        {/* Desktop image blend */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0

            w-32
            lg:w-48

            bg-gradient-to-r
            from-ink
            to-transparent

            hidden
            md:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0

            w-24
            lg:w-40

            bg-gradient-to-l
            from-ink/30
            to-transparent

            hidden
            md:block
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10

          order-2
          w-full

          md:order-1
          md:flex-1

          min-w-0

          flex
          flex-col
          justify-center

          px-6
          sm:px-10
          md:px-14
          lg:px-20
          xl:px-24

          pt-4
          pb-12

          md:py-20
        "
      >

        {/* =====================================================
            SMALL INTRO
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 12,
                  filter: "blur(4px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.75,
            duration: 0.9,
            ease: softEase,
          }}
          className="
            mb-5
            md:mb-7
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              sm:text-[10px]

              tracking-[0.25em]
              uppercase

              text-cream/35
            "
          >
            Software Developer · Linuxoft
          </span>
        </motion.div>

        {/* =====================================================
            MAIN HEADING
        ===================================================== */}

        <h1
          className="
            font-display
            text-cream
            font-medium

            tracking-[-0.035em]
            leading-[0.98]

            text-[13vw]
            sm:text-[10vw]
            md:text-[5.7vw]
            lg:text-[5.4vw]
            xl:text-[5.2vw]

            max-w-[900px]
          "
        >
          <Line
            delay={0.95}
            reduced={shouldReduceMotion}
          >
            I'm a{" "}
            <span className="italic font-light text-cream/75">
              software
            </span>
          </Line>

          <Line
            delay={1.15}
            reduced={shouldReduceMotion}
          >
            developer focused
          </Line>

          <Line
            delay={1.35}
            reduced={shouldReduceMotion}
          >
            on backend systems
          </Line>
        </h1>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <motion.p
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 24,
                  filter: "blur(8px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 1.7,
            duration: 1.1,
            ease: softEase,
          }}
          className="
            mt-7
            sm:mt-8
            md:mt-9

            max-w-[540px]

            font-sans

            text-sm
            sm:text-base
            md:text-[15px]

            leading-[1.7]

            text-cream/50
          "
        >
          A{" "}
          <span className="text-cream/85 font-medium">
            Backend Developer
          </span>{" "}
          building reliable applications and APIs with{" "}
          <span className="text-cream/85 font-medium">
            Python
          </span>{" "}
          and{" "}
          <span className="text-cream/85 font-medium">
            Golang
          </span>
          , with experience in REST APIs, SQL databases,
          and full-stack application development.
        </motion.p>

        {/* =====================================================
            TECHNOLOGY LINE
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 16,
                  filter: "blur(5px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 1.9,
            duration: 0.9,
            ease: softEase,
          }}
          className="
            mt-5
            sm:mt-6

            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2

            font-mono

            text-[9px]
            sm:text-[10px]

            tracking-[0.12em]
            uppercase

            text-cream/30
          "
        >
          <span>Python</span>

          <span className="text-cream/15">•</span>

          <span>Golang</span>

          <span className="text-cream/15">•</span>

          <span>REST APIs</span>

          <span className="text-cream/15">•</span>

          <span>SQL</span>
        </motion.div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 24,
                  filter: "blur(6px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 2.1,
            duration: 1,
            ease: softEase,
          }}
          className="
            mt-8
            sm:mt-9
            md:mt-10
          "
        >
          <Magnetic>
            <motion.a
              href="/resume.pdf"
              download="Logesh_Nithin_Resume.pdf"
              data-cursor="link"

              whileHover={{
                scale: 1.04,
              }}

              whileTap={{
                scale: 0.96,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}

              className="
                group

                inline-flex
                items-center
                justify-center
                gap-3

                bg-cream
                text-ink

                px-6
                sm:px-8

                py-3.5
                sm:py-4

                rounded-full

                font-sans

                text-[11px]
                sm:text-xs

                font-semibold

                tracking-[0.14em]
                uppercase

                transition-all
                duration-300

                hover:bg-cream/90
              "
            >
              <span>
                Get My Resume
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.a>
          </Magnetic>
        </motion.div>

        {/* =====================================================
            BOTTOM MICRO DETAILS
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: shouldReduceMotion ? 0 : 2.4,
            duration: 1,
          }}
          className="
            mt-10
            md:mt-16

            flex
            items-center
            gap-5

            text-[9px]
            sm:text-[10px]

            tracking-[0.22em]
            uppercase

            text-cream/25
          "
        >
          <span>
            Backend
          </span>

          <span className="h-1 w-1 rounded-full bg-cream/25" />

          <span>
            APIs
          </span>

          <span className="h-1 w-1 rounded-full bg-cream/25" />

          <span>
            Systems
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   ANIMATED HEADING LINE
================================================================= */

function Line({
  children,
  delay,
  reduced,
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"

        initial={
          reduced
            ? {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
              }
            : {
                y: "115%",
                opacity: 0,
                filter: "blur(10px)",
              }
        }

        animate={{
          y: "0%",
          opacity: 1,
          filter: "blur(0px)",
        }}

        transition={{
          duration: 1.3,
          delay: reduced ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

