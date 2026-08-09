"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";

// ⚠️ Double-check this — "logeshnithin.dev" alone isn't a full email
// address, so this is a best-guess placeholder. Swap it for your real
// inbox (e.g. hello@logeshnithin.dev if that's your domain, or your
// actual Gmail/other address).
const EMAIL = "logeshnithin.dev@gmail.com";
const PHONE_DISPLAY = "+91 97895 97651";
const PHONE_TEL = "+919789597651";
const LINKEDIN_URL = "https://www.linkedin.com/in/logesh-nithin-b79051366/";

// Primary, always-visible contact methods.
const CONTACT_CARDS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, color: "#ff8a5c" },
  { label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}`, Icon: Phone, color: "#4ADE80" },
];

// Real brand icon + brand color for each social.
// LinkedIn's mark was pulled from Simple Icons, so it comes from Tabler Icons instead.
const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: TbBrandLinkedin, color: "#0A66C2" },
  { label: "GitHub", href: "#", Icon: SiGithub, color: "#F3EEE3" },
  { label: "Dribbble", href: "#", Icon: SiDribbble, color: "#EA4C89" },
  { label: "Behance", href: "#", Icon: SiBehance, color: "#1769FF" },
];

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-32 px-6 md:px-10 border-t border-line overflow-hidden">
      {/* Ambient background glow — static, no per-frame blur repaint.
          (Animating a heavily-blurred element every frame is the classic
          source of scroll jank; a still gradient reads just as premium.) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 w-[620px] h-[520px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #ff8a5c 0%, #8f7bff 50%, transparent 75%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 -left-32 w-[340px] h-[340px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #61DAFB 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="eyebrow">Get in touch</span>
        {/* TEMP: swapped RevealText for a plain h2 to rule out its
            overflow-hidden line-mask as the source of the clipping.
            Once we confirm/fix RevealText, swap this back to:
            <RevealText as="h2" className="...">Let's build something</RevealText> */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-quicksand font-bold text-4xl md:text-6xl leading-[1.2] text-white max-w-2xl"
        >
          Let's build something
        </motion.p>
        <p className="text-muted max-w-md mb-16 mt-4">
          Have a project in mind or just want to say hi? My inbox — and calendar — are always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
          {/* ---------- Form ---------- */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div custom={0} variants={fieldVariants} className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                id="name"
                required
                placeholder="Your name"
                className="bg-transparent border-b border-line focus:border-aurora2 outline-none py-3 text-lg placeholder:text-muted/60 transition-colors duration-300"
              />
            </motion.div>

            <motion.div custom={1} variants={fieldVariants} className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="you@email.com"
                className="bg-transparent border-b border-line focus:border-aurora2 outline-none py-3 text-lg placeholder:text-muted/60 transition-colors duration-300"
              />
            </motion.div>

            <motion.div custom={2} variants={fieldVariants} className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted">
                Project details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project"
                className="bg-transparent border-b border-line focus:border-aurora2 outline-none py-3 text-lg placeholder:text-muted/60 transition-colors duration-300 resize-none"
              />
            </motion.div>

            <motion.div custom={3} variants={fieldVariants} className="pt-2">
              <Magnetic className="self-start">
                <button
                  type="submit"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream text-ink font-medium transition-all duration-300 ease-out hover:bg-aurora2 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  {sent ? "Sent — thank you!" : "Send Message"} <ArrowUpRight size={16} />
                </button>
              </Magnetic>
            </motion.div>
          </motion.form>

          {/* ---------- Contact info ---------- */}
          <div className="flex flex-col justify-between">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col gap-8"
            >
              {/* Direct contact — email + phone, front and center */}
              <div className="flex flex-col gap-3">
                {CONTACT_CARDS.map(({ label, value, href, Icon, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    data-cursor="link"
                    variants={staggerItem}
                    style={{ "--accent": color }}
                    className="group flex items-center gap-4 rounded-2xl border border-line px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:bg-cream/[0.03]"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-[var(--accent)]/60"
                      style={{ color }}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
                      <span className="text-base md:text-lg font-medium text-cream">{value}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-aurora2 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Socials — compact icon row */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">Elsewhere</span>
                <div className="mt-4 grid grid-cols-2 gap-y-5">
                  {SOCIALS.map(({ label, href, Icon, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-cursor="link"
                      variants={staggerItem}
                      style={{ "--accent": color }}
                      className="group inline-flex items-center gap-3 text-base font-medium w-fit"
                    >
                      <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-line transition-colors duration-300 group-hover:border-[var(--accent)]/60">
                        <span
                          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)" }}
                        />
                        <Icon size={16} style={{ color }} className="relative z-10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                      </span>
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-2 text-muted text-sm mt-10 md:mt-0"
            >
              <MapPin size={14} className="text-aurora2" />
              Based in Chennai, India — open to remote &amp; relocation, worldwide.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}