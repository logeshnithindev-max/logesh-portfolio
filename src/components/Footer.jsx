"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import {
  SiGithub,
  SiDribbble,
  SiBehance,
} from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";

const EMAIL = "logeshnithin.dev@gmail.com";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/logesh-nithin-b79051366/";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    Icon: TbBrandLinkedin,
  },
  {
    label: "GitHub",
    href: "#",
    Icon: SiGithub,
  },
  {
    label: "Dribbble",
    href: "#",
    Icon: SiDribbble,
  },
  {
    label: "Behance",
    href: "#",
    Icon: SiBehance,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-ink
      "
    >
      {/* =================================================
          SUBTLE AMBIENT LIGHT
      ================================================= */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[420px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          opacity-[0.07]
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, #ff8a5c 0%, #8f7bff 45%, transparent 72%)",
        }}
      />

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          md:py-24
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-[1.4fr_0.6fr]
            md:items-end
            md:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
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
                  w-8
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
                Get in touch
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-3xl
                font-quicksand
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-7xl
              "
            >
              Let's create something
              <span className="text-white/25">
                {" "}meaningful.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                mt-6
                max-w-md
                text-sm
                leading-relaxed
                text-white/40
                sm:text-base
              "
            >
              I'm Logesh, a product & UI/UX designer
              focused on creating clear, thoughtful
              and engaging digital experiences.
            </motion.p>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              flex
              flex-col
              md:items-end
            "
          >
            {/* Availability */}
            <div
              className="
                mb-6
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-3
                py-1.5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.7)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                "
              >
                Open to opportunities
              </span>
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                border-b
                border-white/[0.08]
                pb-4
                text-left
                md:w-auto
                md:min-w-[280px]
              "
            >
              <span
                className="
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {EMAIL}
              </span>

              <ArrowUpRight
                size={17}
                className="
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-white
                "
              />
            </a>

            {/* Socials */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-2
              "
            >
              {SOCIALS.map(
                ({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    className="
                      group
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-white/40
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <Icon
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                )
              )}

              {/* Email icon */}
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="
                  group
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  text-white/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <Mail
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          BOTTOM BAR
      ================================================= */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.07]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-5
            py-5
            sm:px-6
            md:flex-row
            md:items-center
            md:justify-between
            md:px-10
          "
        >
          <p
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-white/25
            "
          >
            © {new Date().getFullYear()} Logesh Nithin
          </p>

          <div className="flex items-center gap-5">
            <span
              className="
                hidden
                font-mono
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-white/20
                sm:block
              "
            >
              Product · UI/UX · Development
            </span>

            <a
              href="#top"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-mono
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-white/35
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Back to top

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-white/20
                "
              >
                <ArrowUp size={12} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

