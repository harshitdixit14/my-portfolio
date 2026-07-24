import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowUp } from "lucide-react";

const socials = [
  { icon: FaGithub, href: "https://github.com/harshitdixit14", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/harshit-dixit-9b2471261/",
    label: "LinkedIn",
  },
  { icon: SiLeetcode, href: "https://leetcode.com/u/2sComplement/", label: "LeetCode" },
  { icon: FaEnvelope, href: "mailto:harshitdixit188@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl px-4 pb-10 sm:px-6">
      <div className="glass flex flex-col items-center gap-6 rounded-2xl px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <a
            href="#top"
            className="font-display text-lg font-bold text-white"
          >
            Harshit<span className="gradient-text">.</span>
          </a>
          <p className="mt-1 text-sm text-gray-500">
            © {new Date().getFullYear()} Harshit Dixit. Built with React &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"
            >
              <Icon size={19} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-black transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
