import { useState } from "react";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-violet-400/60 focus:bg-white/[0.06]";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <SectionHeading eyebrow="Say hello" title="Get In Touch" />

      <div className="grid gap-6 md:grid-cols-5">
        {/* Left: info */}
        <Reveal className="md:col-span-2">
          <div className="glass flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Let&apos;s build something great
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Have a project in mind, a question, or just want to connect? My
                inbox is always open — I&apos;ll get back to you as soon as I can.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="mailto:harshitdixit188@gmail.com"
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                    <Mail size={18} />
                  </span>
                  harshitdixit188@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                    <MapPin size={18} />
                  </span>
                  Kanpur, India
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/harshitdixit14"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-dixit-9b2471261/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about it..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "success" && (
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                ✅ Message sent successfully — thank you!
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
