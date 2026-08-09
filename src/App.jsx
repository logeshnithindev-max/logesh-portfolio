import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Process";
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
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
