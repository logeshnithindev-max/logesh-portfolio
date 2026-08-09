import { motion } from "framer-motion";

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
}) {
  return (
    <div className="reveal-line">
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, amount: 0.6 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}
