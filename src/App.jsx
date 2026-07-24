import { useState, useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import TypingText from "./components/TypingText";
import Summary from "./components/Summary";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05060a] text-white">
      {/* Animated starfield */}
      <Background />

      {/* Ambient gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-blob absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="animate-blob absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/15 blur-[120px] [animation-delay:6s]" />
        <div className="animate-blob absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-pink-500/10 blur-[120px] [animation-delay:12s]" />
      </div>

      <Navbar visible={navbarVisible} />

      <main className="relative z-10">
        <TypingText />

        <div className="flex flex-col gap-28 py-16 sm:gap-36 sm:py-24">
          <Summary />
          <TechStack />
          <Timeline />
          <Projects />
          <ContactForm />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
