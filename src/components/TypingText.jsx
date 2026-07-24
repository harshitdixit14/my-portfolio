import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Download } from "lucide-react";
import ProfileCard from "./ProfileCard/ProfileCard";
import profileImg from "../assets/images.png";
import icon from "../assets/icon.jpg";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "Full", label: "Stack" },
  { value: "ML", label: "Enthusiast" },
];

const TypingText = () => {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col-reverse items-center justify-center gap-12 px-4 py-10 sm:px-6 md:flex-row md:gap-16 lg:gap-24"
    >
      {/* Left: copy */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-col items-center text-center md:items-start md:text-left"
      >
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities
        </span>

        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="gradient-text">Harshit Dixit</span>
        </h1>

        <h2 className="mt-4 flex min-h-[2.5rem] items-center font-mono text-xl text-gray-300 sm:text-2xl">
          <span className="mr-2 text-violet-400">&gt;</span>
          <Typewriter
            words={[
              "Web Developer",
              "Machine Learning Enthusiast",
              "Backend & API Design",
              "Let's build something great",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={65}
            deleteSpeed={40}
            delaySpeed={1600}
          />
        </h2>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
          I craft clean, responsive interfaces and build smart, scalable systems —
          bridging thoughtful design with solid engineering.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/40"
          >
            View my work
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
          >
            <Download size={16} />
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 flex items-center gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && <span className="h-8 w-px bg-white/10" />}
              <div className="text-center md:text-left">
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: profile card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full shrink-0 justify-center md:w-auto"
      >
        <ProfileCard
          avatarUrl={profileImg}
          iconUrl={icon}
          grainUrl=""
          showBehindGradient={true}
          enableTilt={true}
          enableMobileTilt={false}
          mobileTiltSensitivity={5}
          name="Harshit Dixit"
          title="Software Engineer"
          handle="harshitdixit"
          status="Online"
          contactText="Contact me"
          showUserInfo={true}
        />
      </motion.div>
    </section>
  );
};

export default TypingText;
