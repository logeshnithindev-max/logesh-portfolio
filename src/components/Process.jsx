"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import img01 from "../assets/projects/01.jpg";
import img02 from "../assets/projects/02.jpg";
import img03 from "../assets/projects/03.jpg";
import img04 from "../assets/projects/04.jpg";
import img05 from "../assets/projects/05.jpg";
import img06 from "../assets/projects/06.jpg";
import img07 from "../assets/projects/07.jpg";
import img08 from "../assets/projects/08.jpg";
import img09 from "../assets/projects/09.jpg";
// import img10 from "../assets/projects/10.jpg";
// import img11 from "../assets/projects/11.jpg";
// import img12 from "../assets/projects/12.jpg";

const IMAGES = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img09,
  img08,
  img07
  
];

const MaximizeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % IMAGES.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close]);

  return (
    <section id="projects" className="relative py-12 px-2 md:px-4 border-t border-line">
      <div className="max-w-7xl mx-auto">
        {/* Title — chunky condensed poster type, matching the site's "ABOUT ME" treatment */}
        <div className="mb-10 md:mb-14 text-center ml-64">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-quicksand font-bold text-4xl md:text-6xl leading-[1.2] text-white max-w-2xl"
        >
          Featured Projects
        </motion.p>
        </div>

        {/*
          Masonry gallery, CSS-columns based.
          - Each image keeps its OWN natural aspect ratio (w-full h-auto),
            so nothing is ever cropped or letterboxed.
          - `break-inside-avoid` stops the browser splitting an image across
            two columns, so there's never a stray gap or misplaced tile.
          - Column count steps up with viewport width: dense on desktop,
            comfortable on mobile.
          - Hover reveals a maximize icon; click opens the image full-size.
        */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:balance]">
          {IMAGES.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label="Open full size image"
              className="group relative mb-3 md:mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-line bg-ink/60 text-left cursor-zoom-in"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                loading="lazy"
                className="block w-full h-auto select-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />

              {/* Hover overlay with maximize affordance */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-ink/50 text-white backdrop-blur scale-90 transition-transform duration-300 group-hover:scale-100">
                  <MaximizeIcon />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox — shows the image at its original, unmodified size/ratio */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 md:right-8 md:top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-ink/50 text-white hover:bg-white hover:text-ink transition-colors"
            >
              <CloseIcon />
            </button>

            <motion.img
              key={activeIndex}
              src={IMAGES[activeIndex]}
              alt=""
              draggable={false}
              className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain select-none rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}