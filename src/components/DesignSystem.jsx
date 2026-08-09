import { motion } from "framer-motion";
import RevealText from "./RevealText";

const COLORS = [
  { name: "Ink", hex: "#08080a" },
  { name: "Cream", hex: "#f3ede1" },
  { name: "Aurora Violet", hex: "#8f7bff" },
  { name: "Aurora Teal", hex: "#4fd7c9" },
  { name: "Aurora Amber", hex: "#ff8a5c" },
  { name: "Muted", hex: "#9a968d" },
];

export default function DesignSystem() {
  return (
    <section className="relative py-32 px-6 md:px-10 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <span className="eyebrow">Foundations</span>
        <RevealText as="h2" className="font-display uppercase text-5xl md:text-7xl tracking-tightest mt-3 mb-16">
          Design System
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Colors */}
          <div>
            <p className="eyebrow mb-6">Colors</p>
            <div className="grid grid-cols-3 gap-4">
              {COLORS.map((c) => (
                <div key={c.hex} className="flex flex-col gap-2">
                  <div
                    className="w-full aspect-square rounded-xl border border-line"
                    style={{ background: c.hex }}
                  />
                  <p className="text-xs text-muted">{c.name}</p>
                  <p className="text-xs font-mono text-muted/70">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <p className="eyebrow mb-6">Typography</p>
            <div className="space-y-4 border-t border-line pt-6">
              <p className="font-display uppercase text-5xl">Aa</p>
              <p className="text-muted text-sm">Anton — Display / Headlines</p>
            </div>
            <div className="space-y-4 border-t border-line pt-6 mt-6">
              <p className="font-body font-semibold text-3xl">Aa Bb Cc</p>
              <p className="text-muted text-sm">Inter — Body / UI text</p>
            </div>
            <div className="space-y-4 border-t border-line pt-6 mt-6">
              <p className="font-mono text-2xl">01 / Aa Bb</p>
              <p className="text-muted text-sm">JetBrains Mono — Labels / Data</p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="mt-20">
          <p className="eyebrow mb-6">Components</p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-6 py-3 rounded-full bg-cream text-ink font-medium">Primary Button</button>
            <button className="px-6 py-3 rounded-full border border-cream/25">Secondary Button</button>
            <span className="px-4 py-2 rounded-full text-xs font-mono border border-aurora2/40 text-aurora2">Tag / Badge</span>
            <div className="glass rounded-xl px-6 py-4 text-sm">Glass Card</div>
          </div>
        </div>

        {/* Spacing / Grid */}
        <div className="mt-20">
          <p className="eyebrow mb-6">Spacing &amp; Grid — 12 Column</p>
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="h-16 rounded-md bg-panel border border-line origin-bottom"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
