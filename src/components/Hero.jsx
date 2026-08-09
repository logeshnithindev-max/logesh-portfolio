import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import Profile from "../assets/Profile.png";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen flex flex-col md:flex-row bg-ink overflow-hidden mt-20 md:mt-6"
    >
      {/* Portrait column — right on desktop, a partial glimpse on mobile */}
      <div className="relative order-2 flex-none h-[30vh] md:h-auto md:flex-1 min-h-0 min-w-0 overflow-hidden border-t md:border-t-0 md:border-l border-cream/10">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={Profile}
            alt="Logesh Nithin"
            className="w-full h-full object-cover object-top"
            style={{ filter: "grayscale(1) contrast(1.08) brightness(0.97)" }}
          />
        </motion.div>
        {/* subtle gradient so the photo blends into the ink background at the seam */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent hidden md:block" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent md:hidden block" />
      </div>

      {/* Statement, subtext, CTA column — now on the left */}
      <div className="relative z-10 order-1 flex-1 min-h-0 min-w-0 flex flex-col justify-center overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 md:px-16 lg:px-20 py-10 md:py-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-sans font-light text-xs tracking-[0.35em] uppercase text-cream/50 mb-6"
        >
          {/* UI / UX Designer */}
        </motion.span>

        <h1 className="font-display text-cream text-[11vw] sm:text-6xl lg:text-7xl leading-[1.05] font-medium tracking-tight">
          <Line delay={0.6}>
            I'm a <span className="italic font-light text-cream/80">creative</span>
          </Line>
          <Line delay={0.75}>UI/UX &amp; product</Line>
          <Line delay={0.9}>designer</Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans text-cream/60 text-base leading-relaxed max-w-md"
        >
          A <span className="text-cream font-medium">Product Designer</span> and{" "}
          <span className="text-cream font-medium">Visual Developer</span> crafting
          elegant, international-level digital experiences across UI/UX design,
          responsive web design, and visual development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          {/* <Magnetic>
            <a
              href="#contact"
              data-cursor="link"
              className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 rounded-full font-sans text-sm font-medium tracking-wide uppercase hover:bg-cream/90 transition-colors duration-300"
            >
              Connect With Me
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </Magnetic> */}
        </motion.div>
      </div>
    </section>
  );
}

function Line({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}