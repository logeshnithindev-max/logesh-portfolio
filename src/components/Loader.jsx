import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ink flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
            style={{ originY: 0, background: "#08080a" }}
          />
          <div className="relative flex flex-col items-center gap-4">
            <motion.span
              className="font-display text-3xl tracking-tightest uppercase text-cream"
              initial={{ letterSpacing: "0.6em", opacity: 0 }}
              animate={{ letterSpacing: "0.05em", opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Welcome to Logesh&nbsp;Nithin's&nbsp;Portfolio
            </motion.span>
            <div className="w-40 h-[2px] bg-line overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-aurora1 via-aurora2 to-aurora3"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
