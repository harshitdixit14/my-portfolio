import { Code2, Server, Cpu } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    text: "Clean, responsive UIs with React, Tailwind and modern JavaScript.",
  },
  {
    icon: Server,
    title: "Backend",
    text: "RESTful & FastAPI services built to be efficient and reliable.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    text: "Exploring models, system design, scalability and fault tolerance.",
  },
];

const Summary = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <SectionHeading eyebrow="Who I am" title="About Me" />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            Hi traveller <span className="wave">👋</span> — I&apos;m{" "}
            <span className="font-semibold text-white">Harshit Dixit</span>, a
            passionate Web Developer and Machine Learning enthusiast who loves
            crafting clean UIs and building smart, scalable systems. With a strong
            foundation in React, Tailwind CSS and modern JavaScript, I thrive on
            creating seamless user experiences and impactful digital products.
          </p>
          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            Beyond the frontend, I bring solid backend knowledge — specializing in
            RESTful API and FastAPI design to build efficient, reliable server-side
            applications. My curiosity doesn&apos;t stop there: I actively explore
            system design concepts, learning from books and real-world architectures
            to sharpen my understanding of scalability, performance and fault
            tolerance.
          </p>
          <p className="mt-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            I enjoy working across the stack, bridging design and engineering, and
            always stay open to learning, experimenting and building alongside
            creative minds who share the same drive for innovation.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 md:col-span-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="glass card-hover flex items-start gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300 ring-1 ring-white/10">
                  <h.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    {h.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
