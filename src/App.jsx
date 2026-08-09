import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Process";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import useSmoothScroll from "./lib/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Loader />
      <CursorFollower />

      <div className="grain" />

      <Navbar />

      <main>
        <Hero />

        <About />

        {/* WORK */}
        <Work />

        {/* PROJECTS */}
        <Projects />

        {/* SKILLS */}
        <Skills />

        {/* CONTACT */}
        <Contact />
      </main>

    
    </>
  );
}

