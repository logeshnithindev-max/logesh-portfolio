import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onDown = () => ringRef.current?.classList.add("scale-75", "bg-cream/10");
    const onUp = () => ringRef.current?.classList.remove("scale-75", "bg-cream/10");

    const onOverInteractive = (e) => {
      const el = e.target.closest("[data-cursor='link']");
      ringRef.current?.classList.toggle("scale-[1.8]", !!el);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onOverInteractive);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf;
    const animateRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onOverInteractive);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cream pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 w-9 h-9 rounded-full border border-cream/40 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
      />
    </div>
  );
}
