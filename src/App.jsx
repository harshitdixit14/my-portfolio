import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Navbar from "./components/Navbar";
import TypingText from './components/TypingText'; 
import Summary from './components/Summary';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavbarVisible(false); // Hide on scroll down
      } else {
        setNavbarVisible(true); // Show on scroll up or near top
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <Background />

      {/* Fixed Navbar */}
      <Navbar visible={navbarVisible} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-start pt-[100px] px-4 sm:px-8">
        
        <TypingText />
        <div style={{ marginTop: "8rem" }} />
        {/* Other sections */}
        <section className="mt-10 w-full max-w-4xl">
          <Summary />
          <div style={{ marginTop: "8rem" }} />
          <TechStack />
          <div style={{ marginTop: "8rem" }} />
          <Timeline />
          <div style={{ marginTop: "8rem" }} />
          <Projects />
          <div style={{ marginTop: "8rem" }} />
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
