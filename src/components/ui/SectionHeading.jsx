import Reveal from "./Reveal";

/**
 * Consistent section heading used across the site.
 *   eyebrow  – small mono label above the title
 *   title    – main heading (last word gets the gradient)
 */
const SectionHeading = ({ eyebrow, title, align = "left" }) => {
  const words = title.trim().split(" ");
  const last = words.pop();
  const rest = words.join(" ");

  return (
    <Reveal
      className={`mb-10 flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">
          <span className="h-px w-6 bg-cyan-400/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
        {rest} <span className="gradient-text">{last}</span>
      </h2>
    </Reveal>
  );
};

export default SectionHeading;
