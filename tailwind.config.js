/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08080a",
        panel: "#111114",
        panel2: "#17171b",
        line: "#232328",
        cream: "#f3ede1",
        muted: "#9a968d",
        aurora1: "#8f7bff",
        aurora2: "#4fd7c9",
        aurora3: "#ff8a5c",
        gold: "#e8d6a8",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
