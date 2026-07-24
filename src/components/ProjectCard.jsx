import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, tech, github, live, index = 0 }) => (
  <article className="group glass card-hover relative overflow-hidden rounded-2xl p-6 sm:p-8">
    {/* number watermark */}
    <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-white/[0.03] sm:text-8xl">
      0{index + 1}
    </span>

    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex-1">
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          {description}
        </p>

        {/* tech chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* links */}
      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code`}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
          >
            <FaGithub size={20} />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-black transition-all hover:-translate-y-0.5"
          >
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
