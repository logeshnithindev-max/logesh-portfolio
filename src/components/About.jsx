import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph =
  "I'm a UI/UX designer who turns ideas into simple, intuitive, and visually engaging digital experiences. With a background in frontend development, I bridge design and code — creating interfaces that are beautiful, practical, and buildable.";

// Word-by-word reveal, driven by scroll progress rather than a fixed
// timeline. Only opacity + translateY are animated (no blur filter) —
// filter animation forces the browser to repaint every word every
// frame, which is the main source of scroll jank on longer paragraphs.
function ScrollWords({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const list = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {list.map((word, i) => {
        const start = i / list.length;
        const end = start + 1 / list.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.28em] will-change-transform"
    >
      {children}
    </motion.span>
  );
}

// Simple fade-up info card — no pointer tracking, no per-frame
// gradient recompute, just a one-time viewport-triggered animation.
function InfoCard({ label, title, detail, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-line pt-4"
    >
      <p style={{ color: "#D97757" }} className="font-mono uppercase tracking-[0.2em] text-xs mb-2">
        {label}
      </p>
      <p className="font-quicksand text-1xl md:text-2xl text-cream">{title}</p>
      <p className="text-muted text-sm mt-2">{detail}</p>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Ambient parallax: the eyebrow column drifts slower than the content
  // column as the section scrolls through view.
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={sectionRef} className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div style={{ y: eyebrowY }} className="md:col-span-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: "#D97757" }}
              className="font-mono uppercase tracking-[0.3em] text-sm"
            >
              How I Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black uppercase text-cream text-6xl md:text-8xl leading-[0.9] tracking-tight mt-3"
            >
              About Me
            </motion.h2>
          </motion.div>

          <div className="md:col-span-10 md:col-start-2 space-y-8 mt-12">
            <ScrollWords
              text={paragraph}
              className="text-xl md:text-2xl leading-relaxed text-cream/90"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-cream/70 text-lg"
            >
              I'm a fresher, eager to bring that background into my first
              professional role.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
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
      </div>
    </section>
  );
}