import { GraduationCap, School, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const timeline = [
  {
    icon: School,
    period: "2014 – 2020",
    title: "Schooling · KV IIT Kanpur",
    description:
      "Built the foundations of Python programming and computer fundamentals.",
  },
  {
    icon: GraduationCap,
    period: "2021 – 2025",
    title: "B.Tech in Computer Science · PSIT Kanpur",
    description:
      "Bachelor's in Computer Science — sharpened problem-solving and core engineering skills.",
  },
  {
    icon: Rocket,
    period: "Present",
    title: "To be continued…",
    description:
      "Always building, always learning — the next chapter is being written.",
    upcoming: true,
  },
];

const Timeline = () => {
  return (
    <section id="journey" className="mx-auto w-full max-w-4xl px-4 sm:px-6">
      <SectionHeading eyebrow="My path" title="The Journey" />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/40 to-transparent sm:left-[23px]" />

        <div className="flex flex-col gap-8">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="relative flex gap-5 sm:gap-6">
                {/* node */}
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-[#05060a] sm:h-12 sm:w-12 ${
                    item.upcoming
                      ? "bg-white/5 text-gray-400"
                      : "bg-gradient-to-br from-violet-500 to-cyan-400 text-black"
                  }`}
                >
                  <item.icon size={20} />
                </span>

                <div className="glass card-hover flex-1 rounded-2xl p-5 sm:p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                    {item.period}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {item.description}
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

export default Timeline;
