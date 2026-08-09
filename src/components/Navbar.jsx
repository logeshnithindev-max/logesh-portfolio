import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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
      setHidden(y > lastY && y > 200 && !menuOpen);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled || menuOpen ? "bg-ink/70 backdrop-blur-xl border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <a href="#top" data-cursor="link" className="font-display text-lg tracking-wide uppercase">
            <span className="text-aurora1">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="link"
                className="eyebrow hover:text-cream transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Magnetic>
            <a
              href="#contact"
              data-cursor="link"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cream/20 text-sm font-medium hover:bg-cream hover:text-ink transition-colors duration-300"
            >
              Let's talk
            </a>
          </Magnetic>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            data-cursor="link"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 text-cream"
          >
            {menuOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                data-cursor="link"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl uppercase text-cream/80 hover:text-cream transition-colors duration-300"
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              data-cursor="link"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + LINKS.length * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/20 text-sm font-medium text-cream hover:bg-cream hover:text-ink transition-colors duration-300"
            >
              Let's talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}