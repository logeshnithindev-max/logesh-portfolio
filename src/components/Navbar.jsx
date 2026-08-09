import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 40);

      // Hide navbar while scrolling down
      // Keep it visible while mobile menu is open
      setHidden(
        y > lastY &&
          y > 200 &&
          !menuOpen
      );

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  // Lock page scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <motion.header
        animate={{
          y: hidden ? "-110%" : "0%",
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          transition-colors
          duration-500
          ${
            scrolled || menuOpen
              ? "bg-ink/80 backdrop-blur-xl border-b border-line"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-16
            sm:h-[72px]
            md:h-20
            w-full
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-10
          "
        >
          {/* =========================
              LOGO / NAME
          ========================== */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="
              relative
              z-[60]
              font-display
              text-base
              sm:text-lg
              md:text-xl
              uppercase
              tracking-tight
              text-cream
              transition-opacity
              duration-300
              hover:opacity-70
            "
          >
            Logesh Nithin
          </a>

          {/* =========================
              DESKTOP NAV
          ========================== */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="link"
                className="
                  eyebrow
                  whitespace-nowrap
                  text-cream/70
                  hover:text-cream
                  transition-colors
                  duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================== */}
          <Magnetic>
            <a
              href="#contact"
              data-cursor="link"
              className="
                hidden
                md:inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-cream/20
                px-5
                py-2.5
                text-sm
                font-medium
                text-cream
                whitespace-nowrap
                hover:bg-cream
                hover:text-ink
                transition-colors
                duration-300
              "
            >
              Let's talk
            </a>
          </Magnetic>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            className="
              relative
              z-[60]
              flex
              h-11
              w-11
              md:hidden
              items-center
              justify-center
              rounded-full
              border
              border-cream/10
              text-cream
              transition-all
              duration-300
              hover:border-cream/30
              hover:bg-cream/5
              active:scale-95
              touch-manipulation
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X
                    size={22}
                    strokeWidth={1.75}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu
                    size={22}
                    strokeWidth={1.75}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
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
            className="
              fixed
              inset-0
              z-40
              flex
              min-h-[100dvh]
              w-full
              flex-col
              items-center
              justify-center
              bg-ink/[0.98]
              px-6
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* Menu links */}
            <nav className="flex w-full max-w-sm flex-col items-center">
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  data-cursor="link"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    w-full
                    border-b
                    border-cream/10
                    py-4
                    text-center
                    font-display
                    text-4xl
                    sm:text-5xl
                    uppercase
                    tracking-tight
                    text-cream/75
                    transition-colors
                    duration-300
                    hover:text-cream
                    active:text-cream
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    0.08 +
                    LINKS.length * 0.06,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cream/20
                  px-7
                  py-3
                  text-sm
                  font-medium
                  text-cream
                  transition-all
                  duration-300
                  hover:bg-cream
                  hover:text-ink
                  active:scale-95
                "
              >
                Let's talk
              </motion.a>
            </nav>

            {/* Bottom label */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="
                absolute
                bottom-6
                left-0
                right-0
                text-center
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-muted
              "
            >
              UI/UX Designer · Frontend Developer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
